import Head from "next/head";
import Link from "next/link";
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

interface GameGroup {
  label: string;
  flag: string;
  games: GameMode[];
}

const GAME_GROUPS: GameGroup[] = [
  {
    label: "Ελλάδα",
    flag: "🇬🇷",
    games: [
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
    ],
  },
  {
    label: "Ευρώπη",
    flag: "🇪🇺",
    games: [
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
      {
        id: "europe-flags",
        icon: "🚩",
        title: "Σημαίες Ευρώπης",
        desc: "Βρες τη χώρα από τη σημαία της. Ξέρεις όλες τις ευρωπαϊκές σημαίες;",
        route: "/quiz/europe-flags",
        available: true,
        color: "from-yellow-600/20 to-yellow-800/10",
        borderColor: "border-yellow-500/30 hover:border-yellow-400/60",
        glowColor: "rgba(234,179,8,0.2)",
        playColor: "text-yellow-400",
      },
      {
        id: "europe-reverse",
        icon: "🔀",
        title: "Αντίστροφο Ευρώπης",
        desc: "Δες μια επισημασμένη χώρα στον χάρτη και επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές.",
        route: "/quiz/europe-reverse",
        available: true,
        color: "from-teal-600/20 to-teal-800/10",
        borderColor: "border-teal-500/30 hover:border-teal-400/60",
        glowColor: "rgba(20,184,166,0.2)",
        playColor: "text-teal-400",
      },
    ],
  },
  {
    label: "Ασία",
    flag: "🌏",
    games: [
      {
        id: "asia",
        icon: "🗺️",
        title: "Χώρες Ασίας",
        desc: "Εντόπισε τις χώρες της Ασίας στον χάρτη. Από την Ιαπωνία ως την Τουρκία.",
        route: "/quiz/asia",
        available: true,
        color: "from-sky-600/20 to-sky-800/10",
        borderColor: "border-sky-500/30 hover:border-sky-400/60",
        glowColor: "rgba(14,165,233,0.2)",
        playColor: "text-sky-400",
      },
      {
        id: "asia-capitals",
        icon: "🏛️",
        title: "Πρωτεύουσες Ασίας",
        desc: "Ξέρεις σε ποια χώρα βρίσκεται το Τόκιο ή η Βαγδάτη; Δοκίμασε το!",
        route: "/quiz/asia-capitals",
        available: true,
        color: "from-indigo-600/20 to-indigo-800/10",
        borderColor: "border-indigo-500/30 hover:border-indigo-400/60",
        glowColor: "rgba(99,102,241,0.2)",
        playColor: "text-indigo-400",
      },
      {
        id: "asia-flags",
        icon: "🚩",
        title: "Σημαίες Ασίας",
        desc: "Βρες τη χώρα από τη σημαία της. Ξέρεις όλες τις ασιατικές σημαίες;",
        route: "/quiz/asia-flags",
        available: true,
        color: "from-rose-600/20 to-rose-800/10",
        borderColor: "border-rose-500/30 hover:border-rose-400/60",
        glowColor: "rgba(244,63,94,0.2)",
        playColor: "text-rose-400",
      },
      {
        id: "asia-reverse",
        icon: "🔀",
        title: "Αντίστροφο Ασίας",
        desc: "Δες μια επισημασμένη χώρα στον χάρτη και επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές.",
        route: "/quiz/asia-reverse",
        available: true,
        color: "from-violet-600/20 to-violet-800/10",
        borderColor: "border-violet-500/30 hover:border-violet-400/60",
        glowColor: "rgba(139,92,246,0.2)",
        playColor: "text-violet-400",
      },
    ],
  },
  {
    label: "Βόρεια Αμερική",
    flag: "🌎",
    games: [
      {
        id: "north-america",
        icon: "🗺️",
        title: "Χώρες Βόρειας Αμερικής",
        desc: "Εντόπισε τις χώρες της Βόρειας Αμερικής στον χάρτη. Από τον Καναδά ως τον Παναμά.",
        route: "/quiz/north-america",
        available: true,
        color: "from-cyan-600/20 to-cyan-800/10",
        borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
        glowColor: "rgba(6,182,212,0.2)",
        playColor: "text-cyan-400",
      },
      {
        id: "north-america-capitals",
        icon: "🏛️",
        title: "Πρωτεύουσες Βόρειας Αμερικής",
        desc: "Ξέρεις σε ποια χώρα βρίσκεται η Αβάνα ή το Σαν Χοσέ; Δοκίμασε το!",
        route: "/quiz/north-america-capitals",
        available: true,
        color: "from-violet-600/20 to-violet-800/10",
        borderColor: "border-violet-500/30 hover:border-violet-400/60",
        glowColor: "rgba(139,92,246,0.2)",
        playColor: "text-violet-400",
      },
      {
        id: "north-america-flags",
        icon: "🚩",
        title: "Σημαίες Βόρειας Αμερικής",
        desc: "Βρες τη χώρα από τη σημαία της. Ξέρεις όλες τις σημαίες της Βόρειας Αμερικής;",
        route: "/quiz/north-america-flags",
        available: true,
        color: "from-orange-600/20 to-orange-800/10",
        borderColor: "border-orange-500/30 hover:border-orange-400/60",
        glowColor: "rgba(249,115,22,0.2)",
        playColor: "text-orange-400",
      },
      {
        id: "north-america-reverse",
        icon: "🔀",
        title: "Αντίστροφο Βόρειας Αμερικής",
        desc: "Δες μια επισημασμένη χώρα στον χάρτη και επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές.",
        route: "/quiz/north-america-reverse",
        available: true,
        color: "from-sky-600/20 to-sky-800/10",
        borderColor: "border-sky-500/30 hover:border-sky-400/60",
        glowColor: "rgba(14,165,233,0.2)",
        playColor: "text-sky-400",
      },
    ],
  },
  {
    label: "Νότια Αμερική",
    flag: "🌎",
    games: [
      {
        id: "south-america",
        icon: "🗺️",
        title: "Χώρες Νότιας Αμερικής",
        desc: "Εντόπισε τις χώρες της Νότιας Αμερικής στον χάρτη. Από τη Βραζιλία ως την Αργεντινή.",
        route: "/quiz/south-america",
        available: true,
        color: "from-lime-600/20 to-lime-800/10",
        borderColor: "border-lime-500/30 hover:border-lime-400/60",
        glowColor: "rgba(132,204,22,0.2)",
        playColor: "text-lime-400",
      },
      {
        id: "south-america-capitals",
        icon: "🏛️",
        title: "Πρωτεύουσες Νότιας Αμερικής",
        desc: "Ξέρεις σε ποια χώρα βρίσκεται το Μπουένος Άιρες ή η Μπραζίλια; Δοκίμασε το!",
        route: "/quiz/south-america-capitals",
        available: true,
        color: "from-teal-600/20 to-teal-800/10",
        borderColor: "border-teal-500/30 hover:border-teal-400/60",
        glowColor: "rgba(20,184,166,0.2)",
        playColor: "text-teal-400",
      },
      {
        id: "south-america-flags",
        icon: "🚩",
        title: "Σημαίες Νότιας Αμερικής",
        desc: "Βρες τη χώρα από τη σημαία της. Ξέρεις όλες τις σημαίες της Νότιας Αμερικής;",
        route: "/quiz/south-america-flags",
        available: true,
        color: "from-pink-600/20 to-pink-800/10",
        borderColor: "border-pink-500/30 hover:border-pink-400/60",
        glowColor: "rgba(236,72,153,0.2)",
        playColor: "text-pink-400",
      },
      {
        id: "south-america-reverse",
        icon: "🔀",
        title: "Αντίστροφο Νότιας Αμερικής",
        desc: "Δες μια επισημασμένη χώρα στον χάρτη και επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές.",
        route: "/quiz/south-america-reverse",
        available: true,
        color: "from-emerald-600/20 to-emerald-800/10",
        borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
        glowColor: "rgba(16,185,129,0.2)",
        playColor: "text-emerald-400",
      },
    ],
  },
  {
    label: "Αφρική",
    flag: "🌍",
    games: [
      {
        id: "africa",
        icon: "🗺️",
        title: "Χώρες Αφρικής",
        desc: "Εντόπισε τις χώρες της Αφρικής στον χάρτη. Από το Μαρόκο ως τη Νότια Αφρική.",
        route: "/quiz/africa",
        available: true,
        color: "from-amber-600/20 to-amber-800/10",
        borderColor: "border-amber-500/30 hover:border-amber-400/60",
        glowColor: "rgba(217,119,6,0.2)",
        playColor: "text-amber-400",
      },
      {
        id: "africa-capitals",
        icon: "🏛️",
        title: "Πρωτεύουσες Αφρικής",
        desc: "Ξέρεις σε ποια χώρα βρίσκεται το Ναϊρόμπι ή το Κάιρο; Δοκίμασε το!",
        route: "/quiz/africa-capitals",
        available: true,
        color: "from-orange-600/20 to-orange-800/10",
        borderColor: "border-orange-500/30 hover:border-orange-400/60",
        glowColor: "rgba(234,88,12,0.2)",
        playColor: "text-orange-400",
      },
      {
        id: "africa-flags",
        icon: "🚩",
        title: "Σημαίες Αφρικής",
        desc: "Βρες τη χώρα από τη σημαία της. Ξέρεις όλες τις αφρικανικές σημαίες;",
        route: "/quiz/africa-flags",
        available: true,
        color: "from-red-600/20 to-red-800/10",
        borderColor: "border-red-500/30 hover:border-red-400/60",
        glowColor: "rgba(220,38,38,0.2)",
        playColor: "text-red-400",
      },
      {
        id: "africa-reverse",
        icon: "🔀",
        title: "Αντίστροφο Αφρικής",
        desc: "Δες μια επισημασμένη χώρα στον χάρτη και επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές.",
        route: "/quiz/africa-reverse",
        available: true,
        color: "from-amber-600/20 to-amber-800/10",
        borderColor: "border-amber-500/30 hover:border-amber-400/60",
        glowColor: "rgba(217,119,6,0.2)",
        playColor: "text-amber-400",
      },
    ],
  },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>GeoMix — Μάθε τη Γεωγραφία της Ελλάδας και της Ευρώπης</title>
        <meta
          name="description"
          content="Δωρεάν διαδραστικό κουίζ γεωγραφίας για μαθητές. Μάθε τις περιφέρειες και τους νομούς της Ελλάδας, τις χώρες και τις πρωτεύουσες της Ευρώπης με διασκεδαστικό τρόπο."
        />
        <meta
          name="keywords"
          content="γεωγραφία, κουίζ γεωγραφίας, ελλάδα, περιφέρειες ελλάδας, νομοί ελλάδας, χώρες ευρώπης, πρωτεύουσες ευρώπης, εκπαίδευση, μαθητές, δημοτικό, γυμνάσιο, λύκειο, διαδραστικός χάρτης"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="GeoMix — Μάθε τη Γεωγραφία της Ελλάδας και της Ευρώπης"
        />
        <meta
          property="og:description"
          content="Δωρεάν διαδραστικό κουίζ γεωγραφίας για μαθητές. Περιφέρειες, νομοί, χώρες Ευρώπης και πρωτεύουσες."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/" />
      </Head>
      <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
        <GridPattern
          width={50}
          height={50}
          className="absolute inset-0 opacity-40"
        />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center px-6 py-20 max-w-4xl mx-auto">
          {/* Badge */}
          <BlurFade delay={0.05} duration={0.3}>
            <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm">
              <span>🇬🇷</span>
              <span>Εκπαιδευτική Πλατφόρμα Γεωγραφίας</span>
            </div>
          </BlurFade>

          {/* Hero */}
          <BlurFade delay={0.1} duration={0.3}>
            <h1 className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Μάθε τη Γεωγραφία <br />
              <AnimatedGradientText className="text-5xl sm:text-6xl font-extrabold">
                της Ελλάδας
              </AnimatedGradientText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.15} duration={0.3}>
            <p className="text-center text-lg text-slate-400 max-w-xl mb-14 leading-relaxed">
              Ένα δωρεάν, διαδραστικό κουίζ γεωγραφίας για μαθητές όλων των
              ηλικιών. Διάλεξε τύπο παιχνιδιού και ξεκίνα!
            </p>
          </BlurFade>

          {/* ── Game groups ── */}
          <div className="flex flex-col gap-10 w-full">
            {GAME_GROUPS.map((group, gi) => (
              <BlurFade
                key={group.label}
                delay={gi === 0 ? 0.2 : 0}
                duration={0.25}
                inView
                className="w-full"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg">{group.flag}</span>
                  <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                    {group.label}
                  </h2>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Group cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.games.map((game, i) => (
                    <BlurFade
                      key={game.id}
                      delay={i * 0.04}
                      duration={0.2}
                      inView
                    >
                      <motion.button
                        onClick={() =>
                          game.available && router.push(game.route)
                        }
                        whileHover={
                          game.available
                            ? {
                                y: -4,
                                boxShadow: `0 0 40px 0 ${game.glowColor}`,
                              }
                            : {}
                        }
                        whileTap={game.available ? { scale: 0.98 } : {}}
                        transition={{ duration: 0.2 }}
                        className={`
                        relative w-full text-left rounded-2xl border bg-gradient-to-br p-5
                        transition-colors duration-200
                        ${game.color} ${game.borderColor}
                        ${game.available ? "cursor-pointer" : "cursor-default opacity-60"}
                      `}
                      >
                        {game.badge && (
                          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-slate-700/80 text-slate-300 px-2 py-0.5 rounded-full">
                            {game.badge}
                          </span>
                        )}

                        <div className="flex items-start gap-4">
                          <span className="text-3xl shrink-0 mt-0.5">
                            {game.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-100 text-base mb-1">
                              {game.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                              {game.desc}
                            </p>
                          </div>
                        </div>

                        {game.available && (
                          <div className="mt-4 flex items-center justify-between">
                            <div
                              className={`flex items-center gap-1.5 text-xs font-semibold ${game.playColor}`}
                            >
                              <span>Παίξε τώρα</span>
                              <span>→</span>
                            </div>
                            {!game.route.endsWith("-reverse") && (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push(`${game.route}?mode=relax`);
                                }}
                                className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                              >
                                🔍 Εξερεύνηση
                              </span>
                            )}
                          </div>
                        )}
                      </motion.button>
                    </BlurFade>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>

          <footer className="mt-16 border-t border-slate-800/60 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 w-full">
            <span>
              © {new Date().getFullYear()} GeoMix · Εκπαιδευτική πλατφόρμα
              γεωγραφίας
            </span>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="hover:text-slate-400 transition-colors"
              >
                Μάθε Γεωγραφία
              </Link>
              <Link
                href="/about"
                className="hover:text-slate-400 transition-colors"
              >
                Σχετικά
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-400 transition-colors"
              >
                Επικοινωνία
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-slate-400 transition-colors"
              >
                Πολιτική Απορρήτου
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-400 transition-colors"
              >
                Όροι Χρήσης
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
