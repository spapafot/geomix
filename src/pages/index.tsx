import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { GridPattern } from "@/components/ui/grid-pattern";

interface GameMode {
  id: string;
  icon: string;
  title: string;
  desc: string;
  route: string;
  badge?: string;
  available: boolean;
  color: string;
  borderColor: string;
  glowColor: string;
  playColor: string;
}

const GAMES: GameMode[] = [
  {
    id: "peripheries",
    icon: "🗺️",
    title: "Περιφέρειες",
    desc: "Εντόπισε τις περιφέρειες της Ελλάδας στον χάρτη. Ιδανικό για αρχάριους.",
    route: "/quiz",
    available: true,
    color: "from-blue-600/20 to-blue-800/10",
    borderColor: "border-blue-500/30 hover:border-blue-400/60",
    glowColor: "rgba(59,130,246,0.2)",
    playColor: "text-blue-400",
  },
  {
    id: "nomoi",
    icon: "📍",
    title: "Νομοί",
    desc: "Βρες τους νομούς της Ελλάδας στον χάρτη. Δοκιμή για προχωρημένους.",
    route: "/quiz/nomoi",
    available: true,
    color: "from-violet-600/20 to-violet-800/10",
    borderColor: "border-violet-500/30 hover:border-violet-400/60",
    glowColor: "rgba(139,92,246,0.2)",
    playColor: "text-violet-400",
  },
  {
    id: "europe",
    icon: "🌍",
    title: "Χώρες Ευρώπης",
    desc: "Εντόπισε τις χώρες της Ευρώπης στον χάρτη. Από την Πορτογαλία ως την Τουρκία.",
    route: "/quiz/europe",
    available: true,
    color: "from-emerald-600/20 to-emerald-800/10",
    borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
    glowColor: "rgba(16,185,129,0.2)",
    playColor: "text-emerald-400",
  },
  {
    id: "europe-capitals",
    icon: "🏛️",
    title: "Πρωτεύουσες Ευρώπης",
    desc: "Ξέρεις σε ποια χώρα βρίσκεται η Βιέννη ή η Μπρατισλάβα; Δοκίμασε το!",
    route: "/quiz/europe-capitals",
    available: true,
    color: "from-orange-600/20 to-orange-800/10",
    borderColor: "border-orange-500/30 hover:border-orange-400/60",
    glowColor: "rgba(249,115,22,0.2)",
    playColor: "text-orange-400",
  },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <GridPattern width={50} height={50} className="absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20 max-w-4xl mx-auto">

        {/* Badge */}
        <BlurFade delay={0.1}>
          <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm">
            <span>🇬🇷</span>
            <span>Εκπαιδευτική Πλατφόρμα Γεωγραφίας</span>
          </div>
        </BlurFade>

        {/* Hero */}
        <BlurFade delay={0.2}>
          <h1 className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Μάθε τη Γεωγραφία{" "}
            <br />
            <AnimatedGradientText className="text-5xl sm:text-6xl font-extrabold">
              της Ελλάδας
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-center text-lg text-slate-400 max-w-xl mb-14 leading-relaxed">
            Ένα δωρεάν, διαδραστικό κουίζ γεωγραφίας για μαθητές όλων των ηλικιών.
            Διάλεξε τύπο παιχνιδιού και ξεκίνα!
          </p>
        </BlurFade>

        {/* ── Game selection ── */}
        <BlurFade delay={0.4} className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-xs text-slate-500 uppercase tracking-widest whitespace-nowrap">Διάλεξε παιχνίδι</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {GAMES.map((game, i) => (
            <BlurFade key={game.id} delay={0.45 + i * 0.08} inView>
              <motion.button
                onClick={() => game.available && router.push(game.route)}
                whileHover={game.available ? { y: -4, boxShadow: `0 0 40px 0 ${game.glowColor}` } : {}}
                whileTap={game.available ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
                className={`
                  relative w-full text-left rounded-2xl border bg-gradient-to-br p-5
                  transition-colors duration-200
                  ${game.color} ${game.borderColor}
                  ${game.available ? "cursor-pointer" : "cursor-default opacity-60"}
                `}
              >
                {/* Badge */}
                {game.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-slate-700/80 text-slate-300 px-2 py-0.5 rounded-full">
                    {game.badge}
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0 mt-0.5">{game.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-slate-100 text-base">{game.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{game.desc}</p>
                  </div>
                </div>

                {game.available && (
                  <div className={`mt-4 flex items-center gap-1.5 text-xs font-semibold ${game.playColor}`}>
                    <span>Παίξε τώρα</span>
                    <span>→</span>
                  </div>
                )}
              </motion.button>
            </BlurFade>
          ))}
        </div>

        <footer className="mt-16 text-center text-xs text-slate-700">
          <p>© {new Date().getFullYear()} GeoMix · Εκπαιδευτική πλατφόρμα γεωγραφίας · Δωρεάν για όλους</p>
        </footer>

      </div>
    </div>
  );
}
