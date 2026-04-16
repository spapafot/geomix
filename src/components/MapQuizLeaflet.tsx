/**
 * MapQuizLeaflet — Leaflet-based map quiz component (dormant / not used in production).
 *
 * Kept for future use cases that require real tile layers, such as:
 *  - A GeoGuesser-style game (satellite / street-view imagery)
 *  - Visualising PostGIS query results on a real-world background map
 *
 * Usage: wrap with next/dynamic({ ssr: false }) in the page file.
 *
 * Notes (from CLAUDE.md):
 *  - Import Leaflet at the top level here (not dynamically) — SSR is already
 *    disabled at the page level via next/dynamic.
 *  - Do NOT use preferCanvas: true — the Canvas renderer fires async draws
 *    after map.remove(), causing a clearRect crash on unmount. SVG is safe.
 *  - zoomSnap: 0 is required so fitBounds picks an exact fractional zoom.
 *  - Guard against double-init in Strict Mode via _leaflet_id check.
 */

import { useEffect, useRef, useState } from "react";
import L, {
  type Map as LeafletMap,
  type GeoJSON as LeafletGeoJSON,
  type Layer,
  type PathOptions,
} from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import type { RegionProperties, Question } from "@/lib/loadData";

type AccentColor = "blue" | "violet" | "emerald" | "yellow" | "cyan" | "amber" | "orange" | "red" | "sky" | "indigo" | "rose" | "lime" | "teal" | "pink";

interface MapQuizLeafletProps {
  geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties>;
  questions: Question[];
  title?: string;
  flag?: string;
  accentColor?: AccentColor;
}

type FeedbackState = "idle" | "correct" | "wrong";
type AppMode = "quiz" | "relax";

const DEFAULT_STYLE: PathOptions = {
  color: "#94a3b8",
  weight: 1,
  fillColor: "#2563eb",
  fillOpacity: 0.45,
};
const HOVER_STYLE: PathOptions = { fillColor: "#f59e0b", fillOpacity: 0.85 };
const CORRECT_STYLE: PathOptions = {
  fillColor: "#22c55e",
  fillOpacity: 0.9,
  color: "#15803d",
  weight: 2,
};
const WRONG_STYLE: PathOptions = {
  fillColor: "#ef4444",
  fillOpacity: 0.9,
  color: "#b91c1c",
  weight: 2,
};
const RELAX_SELECTED_STYLE: PathOptions = {
  fillColor: "#8b5cf6",
  fillOpacity: 0.85,
  color: "#6d28d9",
  weight: 2,
};

const ACCENT: Record<AccentColor, { bar: string; btn: string }> = {
  blue:    { bar: "from-blue-500 to-cyan-400",    btn: "bg-blue-600 hover:bg-blue-500" },
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

export default function MapQuizLeaflet({
  geojson,
  questions,
  title = "GeoMix — Ελλάδα",
  flag = "🇬🇷",
  accentColor = "blue",
}: MapQuizLeafletProps) {
  const router = useRouter();
  const mapRef = useRef<LeafletMap | null>(null);
  const geoLayerRef = useRef<LeafletGeoJSON | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null); // the leaflet root (absolute inset-0)
  const mapWrapperRef = useRef<HTMLDivElement>(null);   // the flex-1 parent with real height

  const initialMode: AppMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mode") === "relax"
      ? "relax"
      : "quiz";

  const [mode, setMode] = useState<AppMode>(initialMode);
  const modeRef = useRef<AppMode>(initialMode);
  modeRef.current = mode;

  const [relaxSelectedId, setRelaxSelectedId] = useState<string | null>(null);
  const relaxSelectedIdRef = useRef<string | null>(null);
  relaxSelectedIdRef.current = relaxSelectedId;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [lastClickedId, setLastClickedId] = useState<string | null>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerSizeRef = useRef({ width: 0, height: 0 });

  const answeredRef = useRef(false);
  answeredRef.current = answered;

  // Refs so the GeoJSON click handler always sees the latest values
  // without needing to rebuild the layer on every question change
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;
  const questionsRef = useRef(questions);
  questionsRef.current = questions;

  const accent = ACCENT[accentColor];
  const currentQuestion = questions[currentIndex];

  const getRegionName = (id: string): string => {
    const f = geojson.features.find((ft) => ft.properties.id === id);
    return f?.properties.name ?? id;
  };

  const applyStyles = (
    highlightId: string | null,
    state: FeedbackState,
    targetId?: string,
  ) => {
    geoLayerRef.current?.eachLayer((layer) => {
      const l = layer as Layer & {
        feature?: GeoJSON.Feature<GeoJSON.Geometry, RegionProperties>;
        setStyle: (s: PathOptions) => void;
        bringToFront: () => void;
      };
      if (!l.feature) return;
      const id = l.feature.properties.id;
      if (highlightId && id === highlightId) {
        l.setStyle(state === "correct" ? CORRECT_STYLE : WRONG_STYLE);
        l.bringToFront();
      } else if (targetId && id === targetId && state === "wrong") {
        l.setStyle({ ...CORRECT_STYLE, fillOpacity: 0.9, weight: 3 });
        l.bringToFront();
      } else {
        l.setStyle(DEFAULT_STYLE);
      }
    });
  };

  const applyRelaxStyle = (selectedId: string | null) => {
    geoLayerRef.current?.eachLayer((layer) => {
      const l = layer as Layer & {
        feature?: GeoJSON.Feature<GeoJSON.Geometry, RegionProperties>;
        setStyle: (s: PathOptions) => void;
        bringToFront: () => void;
      };
      if (!l.feature) return;
      if (l.feature.properties.id === selectedId) {
        l.setStyle(RELAX_SELECTED_STYLE);
        l.bringToFront();
      } else {
        l.setStyle(DEFAULT_STYLE);
      }
    });
  };

  const switchMode = (next: AppMode) => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setMode(next);
    setRelaxSelectedId(null);
    applyStyles(null, "idle");
    if (next === "quiz") {
      setFeedback("idle");
      setAnswered(false);
      setLastClickedId(null);
    }
  };

  // Init map once — guard against double-init in React Strict Mode
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if ((mapContainerRef.current as unknown as Record<string, unknown>)._leaflet_id) return;

    const map = L.map(mapContainerRef.current, {
      center: [39, 23],
      zoom: 4,
      zoomSnap: 0, // allow fractional zoom so fitBounds fills the container exactly
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
      dragging: false,
    });

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Watch the flex-1 wrapper (which has the real height) not the absolute inner div
  useEffect(() => {
    if (!mapWrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        containerSizeRef.current = { width, height };
        setContainerSize({ width, height });
      }
    });
    ro.observe(mapWrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const doFit = (width: number, height: number) => {
    if (!mapRef.current || !geoLayerRef.current) return;
    if (width === 0 || height === 0) return;
    const map = mapRef.current;
    const layer = geoLayerRef.current;
    map.invalidateSize();
    const bounds = layer.getBounds();
    if (!bounds.isValid()) return;
    const isMobile = width < 768;
    const padding: [number, number] = isMobile ? [16, 16] : [24, 24];
    map.fitBounds(bounds, { padding, animate: false });
  };

  // Re-fit whenever container size changes (initial paint + window resize)
  useEffect(() => {
    const { width, height } = containerSize;
    if (width === 0 || height === 0) return;
    const t = setTimeout(() => doFit(width, height), 100);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize]);

  // Add GeoJSON layer
  useEffect(() => {
    if (!mapRef.current || !geojson) return;
    geoLayerRef.current?.remove();

    const layer = L.geoJSON(geojson as GeoJSON.FeatureCollection, {
      style: () => ({ ...DEFAULT_STYLE }),
      onEachFeature: (feature, featureLayer) => {
        const fl = featureLayer as Layer & { setStyle: (s: PathOptions) => void };
        featureLayer.on({
          mouseover: () => {
            if (modeRef.current === "relax") {
              if (feature.properties.id !== relaxSelectedIdRef.current) fl.setStyle(HOVER_STYLE);
              return;
            }
            if (!answeredRef.current) fl.setStyle(HOVER_STYLE);
          },
          mouseout: () => {
            if (modeRef.current === "relax") {
              if (feature.properties.id !== relaxSelectedIdRef.current) fl.setStyle(DEFAULT_STYLE);
              return;
            }
            if (!answeredRef.current) fl.setStyle(DEFAULT_STYLE);
          },
          click: () => {
            if (modeRef.current === "relax") {
              const clickedId = feature.properties.id;
              relaxSelectedIdRef.current = clickedId;
              setRelaxSelectedId(clickedId);
              applyRelaxStyle(clickedId);
              return;
            }
            if (answeredRef.current) return;
            const clickedId = feature.properties.id;
            const correctId = questionsRef.current[currentIndexRef.current].answer;
            const isCorrect = clickedId === correctId;
            answeredRef.current = true;
            setAnswered(true);
            setFeedback(isCorrect ? "correct" : "wrong");
            setLastClickedId(clickedId);
            if (isCorrect) setScore((s) => s + 1);
            applyStyles(clickedId, isCorrect ? "correct" : "wrong", isCorrect ? undefined : correctId);
          },
        });
      },
    }).addTo(mapRef.current);

    geoLayerRef.current = layer;

    // If the ResizeObserver already fired before this layer was ready,
    // containerSize won't change again — so fit explicitly now.
    const { width, height } = containerSizeRef.current;
    if (width > 0 && height > 0) {
      setTimeout(() => doFit(width, height), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geojson]);

  const AUTO_ADVANCE_MS = 5000;

  const handleNext = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    applyStyles(null, "idle");
    if (currentIndexRef.current + 1 >= questionsRef.current.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setFeedback("idle");
    setAnswered(false);
    setLastClickedId(null);
  };

  // Belt-and-suspenders: reset map styles after React renders the new question
  useEffect(() => {
    applyStyles(null, "idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Start auto-advance timer whenever the user answers
  useEffect(() => {
    if (!answered || finished) return;
    autoAdvanceRef.current = setTimeout(handleNext, AUTO_ADVANCE_MS);
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, finished]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setFeedback("idle");
    setAnswered(false);
    setFinished(false);
    setLastClickedId(null);
    applyStyles(null, "idle");
  };

  const progress = ((currentIndex + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-950 text-white overflow-hidden">
      {/* ── Map ── */}
      <div ref={mapWrapperRef} className="flex-1 relative min-h-[50vh] lg:min-h-0">
        <div
          ref={mapContainerRef}
          className="absolute inset-0"
          style={{ background: "#0f172a" }}
        />
        <style>{`.leaflet-container { background: #0f172a !important; }`}</style>

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 z-1000 flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-lg px-3 py-1.5 transition-colors"
        >
          ← Αρχική
        </button>
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

        {/* Relax panel */}
        {mode === "relax" && (
          <div className="flex-1 flex flex-col px-5 py-5 overflow-y-auto">
            <AnimatePresence mode="wait">
              {relaxSelectedId ? (
                (() => {
                  const feat = geojson.features.find((f) => f.properties.id === relaxSelectedId);
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
                        <h2 className="text-2xl font-bold text-white leading-tight">{p?.name}</h2>
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

        {/* Question / Result */}
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

                  {/* Auto-advance bar — click to skip */}
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
