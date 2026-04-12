import { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
import type { RegionProperties, Question } from "@/lib/loadData";

// ── Types ─────────────────────────────────────────────────────────────────────

type AccentColor =
  | "blue" | "violet" | "emerald" | "yellow" | "cyan" | "amber"
  | "orange" | "red" | "sky" | "indigo" | "rose" | "lime" | "teal" | "pink";

type AppMode = "quiz" | "relax";
type FeedbackState = "idle" | "correct" | "wrong";
type ProjectionType = "naturalEarth" | "mercator" | "azimuthalEqualArea" | "conicEqualArea" | "equirectangular";

interface MapQuizProps {
  geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties>;
  questions: Question[];
  title?: string;
  flag?: string;
  accentColor?: AccentColor;
  projection?: ProjectionType;
}

// ── Accent palette ────────────────────────────────────────────────────────────

const ACCENT: Record<AccentColor, { bar: string; btn: string }> = {
  blue:    { bar: "from-blue-500 to-cyan-400",     btn: "bg-blue-600 hover:bg-blue-500" },
  violet:  { bar: "from-violet-500 to-purple-400", btn: "bg-violet-600 hover:bg-violet-500" },
  emerald: { bar: "from-emerald-500 to-teal-400",  btn: "bg-emerald-600 hover:bg-emerald-500" },
  yellow:  { bar: "from-yellow-500 to-amber-400",  btn: "bg-yellow-600 hover:bg-yellow-500" },
  cyan:    { bar: "from-cyan-500 to-sky-400",      btn: "bg-cyan-600 hover:bg-cyan-500" },
  amber:   { bar: "from-amber-500 to-yellow-400",  btn: "bg-amber-600 hover:bg-amber-500" },
  orange:  { bar: "from-orange-500 to-amber-400",  btn: "bg-orange-600 hover:bg-orange-500" },
  red:     { bar: "from-red-500 to-rose-400",      btn: "bg-red-600 hover:bg-red-500" },
  sky:     { bar: "from-sky-500 to-cyan-400",      btn: "bg-sky-600 hover:bg-sky-500" },
  indigo:  { bar: "from-indigo-500 to-violet-400", btn: "bg-indigo-600 hover:bg-indigo-500" },
  rose:    { bar: "from-rose-500 to-pink-400",     btn: "bg-rose-600 hover:bg-rose-500" },
  lime:    { bar: "from-lime-500 to-green-400",    btn: "bg-lime-600 hover:bg-lime-500" },
  teal:    { bar: "from-teal-500 to-cyan-400",     btn: "bg-teal-600 hover:bg-teal-500" },
  pink:    { bar: "from-pink-500 to-rose-400",     btn: "bg-pink-600 hover:bg-pink-500" },
};

// ── Colour helpers ────────────────────────────────────────────────────────────

const COLOR = {
  default:       { fill: "#2563eb", fillOpacity: 0.45, stroke: "#94a3b8", strokeWidth: 0.5 },
  hover:         { fill: "#f59e0b", fillOpacity: 0.85, stroke: "#94a3b8", strokeWidth: 0.5 },
  correct:       { fill: "#22c55e", fillOpacity: 0.9,  stroke: "#15803d", strokeWidth: 1.5 },
  wrong:         { fill: "#ef4444", fillOpacity: 0.9,  stroke: "#b91c1c", strokeWidth: 1.5 },
  correctTarget: { fill: "#22c55e", fillOpacity: 0.9,  stroke: "#15803d", strokeWidth: 2 },
  relaxSelected: { fill: "#8b5cf6", fillOpacity: 0.85, stroke: "#6d28d9", strokeWidth: 1.5 },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapQuiz({
  geojson,
  questions,
  title = "GeoMix — Ελλάδα",
  flag = "🇬🇷",
  accentColor = "blue",
  projection: projectionType = "naturalEarth",
}: MapQuizProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Mode ──────────────────────────────────────────────────────────────────
  const initialMode: AppMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mode") === "relax"
      ? "relax"
      : "quiz";

  // Allow overriding projection via ?projection=mercator for experimentation
  const effectiveProjection: ProjectionType =
    typeof window !== "undefined"
      ? ((new URLSearchParams(window.location.search).get("projection") as ProjectionType | null) ?? projectionType)
      : projectionType;

  const [mode, setMode] = useState<AppMode>(initialMode);
  const [relaxSelectedId, setRelaxSelectedId] = useState<string | null>(null);

  // ── Quiz state ────────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [lastClickedId, setLastClickedId] = useState<string | null>(null);

  // ── Map state ─────────────────────────────────────────────────────────────
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const accent = ACCENT[accentColor];
  const currentQuestion = questions[currentIndex];

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
    const proj = projFactory().fitExtent(
      [[padding, padding], [width - padding, height - padding]],
      geojson,
    );
    return geoPath(proj);
  }, [geojson, containerSize, effectiveProjection]);

  // ── Style per feature ─────────────────────────────────────────────────────
  const getStyle = useCallback((id: string) => {
    if (mode === "relax") {
      if (id === relaxSelectedId) return COLOR.relaxSelected;
      if (id === hoveredId)       return COLOR.hover;
      return COLOR.default;
    }
    if (answered) {
      if (id === lastClickedId)
        return feedback === "correct" ? COLOR.correct : COLOR.wrong;
      if (feedback === "wrong" && id === currentQuestion?.answer)
        return COLOR.correctTarget;
    } else if (id === hoveredId) {
      return COLOR.hover;
    }
    return COLOR.default;
  }, [mode, relaxSelectedId, hoveredId, answered, lastClickedId, feedback, currentQuestion]);

  // ── Click handler ─────────────────────────────────────────────────────────
  const handleFeatureClick = useCallback((id: string) => {
    if (mode === "relax") {
      setRelaxSelectedId(id);
      return;
    }
    if (answered) return;
    const correctId = questions[currentIndex].answer;
    const isCorrect = id === correctId;
    setAnswered(true);
    setFeedback(isCorrect ? "correct" : "wrong");
    setLastClickedId(id);
    if (isCorrect) setScore((s) => s + 1);
  }, [mode, answered, questions, currentIndex]);

  // ── Auto-advance ──────────────────────────────────────────────────────────
  const AUTO_ADVANCE_MS = 5000;

  const handleNext = useCallback(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setHoveredId(null);
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setFeedback("idle");
    setAnswered(false);
    setLastClickedId(null);
  }, [currentIndex, questions.length]);

  useEffect(() => {
    if (!answered || finished) return;
    autoAdvanceRef.current = setTimeout(handleNext, AUTO_ADVANCE_MS);
    return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
  }, [answered, finished, handleNext]);

  // ── Mode switch ───────────────────────────────────────────────────────────
  const switchMode = (next: AppMode) => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setMode(next);
    setRelaxSelectedId(null);
    setHoveredId(null);
    if (next === "quiz") {
      setFeedback("idle");
      setAnswered(false);
      setLastClickedId(null);
    }
  };

  // ── Restart ───────────────────────────────────────────────────────────────
  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setFeedback("idle");
    setAnswered(false);
    setFinished(false);
    setLastClickedId(null);
    setHoveredId(null);
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getRegionName = (id: string) =>
    geojson.features.find((f) => f.properties.id === id)?.properties.name ?? id;

  const progress = ((currentIndex + (answered ? 1 : 0)) / questions.length) * 100;

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
          ← Αρχική
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
                  style={{
                    cursor: mode === "relax" || !answered ? "pointer" : "default",
                    transition: "fill 0.15s, fill-opacity 0.15s",
                  }}
                  onMouseEnter={() => {
                    if (mode === "quiz" && answered) return;
                    if (mode === "relax" && id === relaxSelectedId) return;
                    setHoveredId(id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleFeatureClick(id)}
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
            {mode === "quiz" && (
              <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
                {score} / {questions.length}
              </span>
            )}
          </div>

          {/* Mode toggle */}
          <div className="flex gap-1.5 mb-3">
            <button
              onClick={() => switchMode("quiz")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mode === "quiz"
                  ? `${accent.btn} text-white`
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              🎯 Κουίζ
            </button>
            <button
              onClick={() => switchMode("relax")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mode === "relax"
                  ? "bg-violet-600 hover:bg-violet-500 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              🔍 Εξερεύνηση
            </button>
          </div>

          {mode === "quiz" && (
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-linear-to-r ${accent.bar} rounded-full`}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          )}
        </div>

        {/* ── Relax panel ── */}
        {mode === "relax" && (
          <div className="flex-1 flex flex-col px-5 py-5 overflow-y-auto">
            <AnimatePresence mode="wait">
              {relaxSelectedId ? (
                (() => {
                  const feat = geojson.features.find(
                    (f) => f.properties.id === relaxSelectedId,
                  );
                  const p = feat?.properties;
                  return (
                    <motion.div
                      key={relaxSelectedId}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-4"
                    >
                      {p?.iso2 && (
                        <img
                          src={`/flags/4x3/${p.iso2}.svg`}
                          alt={p.name}
                          className="h-20 w-auto rounded-lg shadow-lg border border-slate-700/60 self-start"
                        />
                      )}
                      <div>
                        <h2 className="text-2xl font-bold text-white leading-tight">
                          {p?.name}
                        </h2>
                        {p?.capital && (
                          <div className="flex items-center gap-2 mt-2 text-slate-300 text-sm">
                            <span>🏛️</span>
                            <span>{p.capital}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-auto">
                        Κάνε κλικ σε άλλη περιοχή για να συνεχίσεις
                      </p>
                    </motion.div>
                  );
                })()
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center gap-3 h-full"
                >
                  <span className="text-4xl">🗺️</span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Κάνε κλικ σε μια περιοχή για να δεις το όνομα, τη σημαία και την πρωτεύουσά της
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ── Quiz panel ── */}
        {mode === "quiz" && (
          <div className="flex-1 flex flex-col px-5 py-5 gap-4 overflow-y-auto">
            <AnimatePresence mode="wait">
              {finished ? (
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
                    {score === questions.length ? "Τέλειο!" : `${score} / ${questions.length} σωστά`}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {score === questions.length ? "Άριστη γνώση!" : "Συνέχισε να εξασκείσαι!"}
                  </p>
                  <button
                    onClick={handleRestart}
                    className={`mt-2 px-6 py-2.5 ${accent.btn} rounded-xl font-semibold transition-colors text-sm`}
                  >
                    Παίξε Ξανά
                  </button>
                  <button
                    onClick={() => router.push("/")}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    ← Επιλογή παιχνιδιού
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`q-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                    Ερώτηση {currentIndex + 1} από {questions.length}
                  </p>
                  <p className="text-lg font-semibold text-slate-100 leading-snug">
                    {currentQuestion.prompt}
                  </p>
                  {currentQuestion.image_url && (
                    <img
                      src={currentQuestion.image_url}
                      alt="flag"
                      className="h-12 w-auto rounded shadow-md border border-slate-700/60 self-start"
                    />
                  )}
                  <p className="text-xs text-slate-500">Κάνε κλικ στον χάρτη</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Feedback */}
            <AnimatePresence>
              {feedback !== "idle" && !finished && (
                <motion.div
                  key={`fb-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl px-4 py-4 flex flex-col gap-3 ${
                    feedback === "correct"
                      ? "bg-green-500/15 border border-green-500/40"
                      : "bg-red-500/15 border border-red-500/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{feedback === "correct" ? "✅" : "❌"}</span>
                    <span className={`font-bold text-base ${feedback === "correct" ? "text-green-300" : "text-red-300"}`}>
                      {feedback === "correct" ? "Σωστό!" : "Λάθος!"}
                    </span>
                  </div>

                  {feedback === "wrong" && lastClickedId && (
                    <div className="flex flex-col gap-1.5 text-xs border-t border-red-500/20 pt-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 shrink-0 w-32">Απάντησες:</span>
                        <span className="text-red-300 font-medium">{getRegionName(lastClickedId)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 shrink-0 w-32">Σωστή απάντηση:</span>
                        <span className="text-green-300 font-medium">{getRegionName(currentQuestion.answer)}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleNext}
                    className="relative w-full h-8 rounded-lg overflow-hidden bg-slate-700/60 hover:bg-slate-700 transition-colors group"
                    title="Κλικ για να συνεχίσεις"
                  >
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${feedback === "correct" ? "bg-green-500/50" : "bg-red-500/50"}`}
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                    />
                    <span className="relative z-10 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                      {currentIndex + 1 >= questions.length ? "Δες Αποτελέσματα →" : "Επόμενη →"}
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
