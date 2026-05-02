import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import {
  geoPath,
  geoNaturalEarth1,
  geoMercator,
  geoAzimuthalEqualArea,
  geoConicEqualArea,
  geoEquirectangular,
} from "d3-geo";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import type { RegionProperties } from "@/lib/loadData";

// ── Types ─────────────────────────────────────────────────────────────────────

type MCMode = "names" | "flags";
type ProjectionType = "naturalEarth" | "mercator" | "azimuthalEqualArea" | "conicEqualArea" | "equirectangular";

interface MCQuestion {
  targetId: string;   // highlighted country (correct answer)
  options: string[];  // 4 feature IDs, shuffled
}

interface MapQuizMCProps {
  geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties>;
  title?: string;
  flag?: string;
  defaultMode?: MCMode;
  projection?: ProjectionType;
  projectionRotate?: [number, number] | [number, number, number];
}

// ── Colour helpers ────────────────────────────────────────────────────────────

const COLOR = {
  default:   { fill: "#2563eb", fillOpacity: 0.45, stroke: "#94a3b8", strokeWidth: 0.5 },
  target:    { fill: "#f59e0b", fillOpacity: 0.9,  stroke: "#d97706", strokeWidth: 2 },
  revealed:  { fill: "#22c55e", fillOpacity: 0.9,  stroke: "#15803d", strokeWidth: 2 },
};

// ── MC question generator ─────────────────────────────────────────────────────

function generateMCQuestions(
  features: GeoJSON.Feature<GeoJSON.Geometry, RegionProperties>[],
): MCQuestion[] {
  const ids = features.map((f) => f.properties.id);
  const shuffled = [...ids].sort(() => Math.random() - 0.5);
  return shuffled.map((targetId) => {
    const pool = ids.filter((id) => id !== targetId);
    const wrong = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [targetId, ...wrong].sort(() => Math.random() - 0.5);
    return { targetId, options };
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapQuizMC({
  geojson,
  title = "GeoMix",
  flag = "🗺️",
  defaultMode = "names",
  projection: projectionType = "naturalEarth",
  projectionRotate,
}: MapQuizMCProps) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const effectiveProjection: ProjectionType =
    typeof window !== "undefined"
      ? ((new URLSearchParams(window.location.search).get("projection") as ProjectionType | null) ?? projectionType)
      : projectionType;

  const hasFlags = geojson.features.some((f) => f.properties.iso2);

  // ── Mode ──────────────────────────────────────────────────────────────────
  const [mcMode, setMcMode] = useState<MCMode>(defaultMode);

  // ── Quiz state ────────────────────────────────────────────────────────────
  const [questions, setQuestions] = useState<MCQuestion[]>(() =>
    generateMCQuestions(geojson.features),
  );
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null); // ID chosen by user, null = unanswered
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // ── Map state ─────────────────────────────────────────────────────────────
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const question = questions[index];
  const AUTO_ADVANCE_MS = 3000;

  // ── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setContainerSize({ width, height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Projection + path generator ───────────────────────────────────────────
  const pathFn = useMemo(() => {
    const { width, height } = containerSize;
    if (!width || !height) return null;

    const projFactory =
      effectiveProjection === "mercator"           ? geoMercator :
      effectiveProjection === "azimuthalEqualArea" ? geoAzimuthalEqualArea :
      effectiveProjection === "conicEqualArea"     ? geoConicEqualArea :
      effectiveProjection === "equirectangular"    ? geoEquirectangular :
                                                     geoNaturalEarth1;

    const padding = width < 640 ? 10 : 20;
    const baseProj = projFactory();
    if (projectionRotate) (baseProj as any).rotate(projectionRotate);
    const proj = baseProj.fitExtent(
      [[padding, padding], [width - padding, height - padding]],
      geojson,
    );
    return geoPath(proj);
  }, [geojson, containerSize, effectiveProjection, projectionRotate]);

  // ── Style per feature ─────────────────────────────────────────────────────
  const getStyle = useCallback((id: string) => {
    const target = question?.targetId;
    if (picked !== null && id === target) return COLOR.revealed;
    if (picked === null && id === target) return COLOR.target;
    return COLOR.default;
  }, [question, picked]);

  // ── Advance ───────────────────────────────────────────────────────────────
  const handleNext = useCallback(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }, [index, questions.length]);

  useEffect(() => {
    if (picked === null || finished) return;
    autoAdvanceRef.current = setTimeout(handleNext, AUTO_ADVANCE_MS);
    return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
  }, [picked, finished, handleNext]);

  // ── Answer handler ────────────────────────────────────────────────────────
  const handlePick = useCallback((optionId: string) => {
    if (picked !== null) return;
    setPicked(optionId);
    if (optionId === question?.targetId) setScore((s) => s + 1);
  }, [picked, question]);

  // ── Mode switch ───────────────────────────────────────────────────────────
  const switchMode = (next: MCMode) => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setMcMode(next);
    setQuestions(generateMCQuestions(geojson.features));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  // ── Restart ───────────────────────────────────────────────────────────────
  const handleRestart = () => {
    setQuestions(generateMCQuestions(geojson.features));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getRegionName = (id: string) => {
    const props = geojson.features.find((f) => f.properties.id === id)?.properties;
    if (!props) return id;
    return (isEn ? props.name_en : undefined) ?? props.name ?? id;
  };

  const getIso2 = (id: string) =>
    geojson.features.find((f) => f.properties.id === id)?.properties.iso2 ?? null;

  const progress = ((index + (picked !== null ? 1 : 0)) / questions.length) * 100;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-950 text-white overflow-hidden">

      {/* ── Map ── */}
      <div ref={containerRef} className="flex-1 relative min-h-[50vh] lg:min-h-0 overflow-hidden">

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-lg px-3 py-1.5 transition-colors"
        >
          ← {t("quiz.back_home")}
        </button>


        {/* D3 SVG map */}
        {pathFn && (
          <svg
            width={containerSize.width}
            height={containerSize.height}
            style={{ display: "block", background: "#0f172a" }}
          >
            {geojson.features.map((feature) => {
              const id = feature.properties.id;
              const d = pathFn(feature);
              if (!d) return null;
              const s = getStyle(id);
              return (
                <path
                  key={id}
                  d={d}
                  fill={s.fill}
                  fillOpacity={s.fillOpacity}
                  stroke={s.stroke}
                  strokeWidth={s.strokeWidth}
                  strokeLinejoin="round"
                  style={{ cursor: "default", transition: "fill 0.2s, fill-opacity 0.2s" }}
                />
              );
            })}
          </svg>
        )}
      </div>

      {/* ── Panel ── */}
      <div className="w-full lg:w-80 xl:w-96 flex flex-col bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-700/60 shrink-0">

        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-slate-700/60">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{flag}</span>
              <span className="font-bold text-slate-200 text-sm tracking-wide">{title}</span>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
              {score} / {questions.length}
            </span>
          </div>

          {/* Mode toggle */}
          <div className="flex gap-1.5 mb-3">
            <button
              onClick={() => switchMode("names")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mcMode === "names"
                  ? "bg-amber-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              🗺️ {t("quiz.mode_names")}
            </button>
            {hasFlags && (
              <button
                onClick={() => switchMode("flags")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  mcMode === "flags"
                    ? "bg-rose-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                🚩 {t("quiz.mode_flags")}
              </button>
            )}
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-amber-500 to-yellow-400 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex-1 flex flex-col px-5 py-5 gap-4 overflow-y-auto">
          <AnimatePresence mode="wait">
            {finished ? (
              /* Results screen */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="flex flex-col items-center justify-center flex-1 gap-4 text-center"
              >
                <div className="text-5xl">
                  {score === questions.length ? "🏆" : score >= questions.length / 2 ? "🎉" : "📚"}
                </div>
                <p className="text-2xl font-bold">
                  {score === questions.length ? "🏆" : `${score} / ${questions.length} ${t("quiz.correct_answers")}`}
                </p>
                <p className="text-slate-400 text-sm">
                  {t("quiz.quiz_complete")}
                </p>
                <button
                  onClick={handleRestart}
                  className="mt-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 rounded-xl font-semibold transition-colors text-sm"
                >
                  {t("quiz.play_again")}
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  ← {t("quiz.back_home")}
                </button>
              </motion.div>
            ) : (
              /* Question */
              <motion.div
                key={`mc-${index}-${mcMode}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4"
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  {t("quiz.question")} {index + 1} {t("quiz.of")} {questions.length}
                </p>
                <p className="text-base font-semibold text-slate-100 leading-snug">
                  {mcMode === "flags"
                    ? t("quiz.which_flag")
                    : t("quiz.which_country")}
                </p>

                {/* ── Name options ── */}
                {mcMode === "names" && (
                  <div className="flex flex-col gap-2">
                    {question?.options.map((optId) => {
                      const isCorrect = optId === question.targetId;
                      const isChosen  = optId === picked;
                      const revealed  = picked !== null;

                      let cls = "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/60";
                      if (revealed) {
                        if (isCorrect)            cls = "bg-green-500/20 text-green-300 border border-green-500/50";
                        else if (isChosen)        cls = "bg-red-500/20 text-red-300 border border-red-500/50";
                        else                      cls = "bg-slate-800/50 text-slate-500 border border-slate-700/30";
                      }

                      return (
                        <button
                          key={optId}
                          onClick={() => handlePick(optId)}
                          disabled={revealed}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${cls}`}
                        >
                          <span>{getRegionName(optId)}</span>
                          {revealed && isCorrect  && <span>✅</span>}
                          {revealed && isChosen && !isCorrect && <span>❌</span>}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* ── Flag options (2×2 grid) ── */}
                {mcMode === "flags" && (
                  <div className="grid grid-cols-2 gap-2">
                    {question?.options.map((optId) => {
                      const iso2      = getIso2(optId);
                      const isCorrect = optId === question.targetId;
                      const isChosen  = optId === picked;
                      const revealed  = picked !== null;

                      let borderCls = "border-slate-700/60 hover:border-slate-500";
                      if (revealed) {
                        if (isCorrect)      borderCls = "border-green-500/70";
                        else if (isChosen)  borderCls = "border-red-500/70";
                        else               borderCls = "border-slate-700/30 opacity-50";
                      }

                      return (
                        <button
                          key={optId}
                          onClick={() => handlePick(optId)}
                          disabled={revealed}
                          className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[4/3] flex items-center justify-center bg-slate-800 ${borderCls}`}
                        >
                          {iso2 ? (
                            <img
                              src={`/flags/4x3/${iso2}.svg`}
                              alt={getRegionName(optId)}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-slate-600 text-xs text-center px-1">{getRegionName(optId)}</span>
                          )}
                          {revealed && isCorrect && (
                            <span className="absolute top-1 right-1 bg-green-500/90 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                          )}
                          {revealed && isChosen && !isCorrect && (
                            <span className="absolute top-1 right-1 bg-red-500/90 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✗</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* After-answer: hint + next button */}
                <AnimatePresence>
                  {picked !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-2"
                    >
                      {picked !== question?.targetId && (
                        <p className="text-xs text-slate-400">
                          {t("quiz.correct_answer")}{" "}
                          <span className="text-green-300 font-medium">
                            {getRegionName(question?.targetId ?? "")}
                          </span>
                        </p>
                      )}
                      <button
                        onClick={handleNext}
                        className="relative w-full h-8 rounded-lg overflow-hidden bg-slate-700/60 hover:bg-slate-700 transition-colors group"
                      >
                        <motion.div
                          className={`absolute inset-y-0 left-0 ${picked === question?.targetId ? "bg-green-500/50" : "bg-red-500/50"}`}
                          initial={{ width: "100%" }}
                          animate={{ width: "0%" }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        />
                        <span className="relative z-10 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                          {index + 1 >= questions.length ? t("quiz.see_results") : t("quiz.next_question")}
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
