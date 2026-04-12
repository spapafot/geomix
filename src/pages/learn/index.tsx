import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteNav from "@/components/SiteNav";

const ARTICLES = [
  {
    href: "/learn/greece",
    flag: "🇬🇷",
    title: "Γεωγραφία Ελλάδας",
    desc: "Περιφέρειες, νομοί, γεωγραφικά χαρακτηριστικά και σημαντικές πόλεις της Ελλάδας.",
    color: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/30 hover:border-blue-400/60",
    quiz: "/quiz",
  },
  {
    href: "/learn/europe",
    flag: "🌍",
    title: "Χώρες Ευρώπης",
    desc: "Οι 44 χώρες της Ευρώπης, οι πρωτεύουσές τους και βασικά γεωγραφικά στοιχεία.",
    color: "from-emerald-600/20 to-emerald-800/10",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    quiz: "/quiz/europe",
  },
  {
    href: "/learn/asia",
    flag: "🌏",
    title: "Χώρες Ασίας",
    desc: "Η μεγαλύτερη ήπειρος — 45 χώρες, πρωτεύουσες και γεωγραφικά αξιοθέατα.",
    color: "from-sky-600/20 to-sky-800/10",
    border: "border-sky-500/30 hover:border-sky-400/60",
    quiz: "/quiz/asia",
  },
  {
    href: "/learn/africa",
    flag: "🌍",
    title: "Χώρες Αφρικής",
    desc: "Η ήπειρος με τις περισσότερες χώρες — 53 χώρες και οι πρωτεύουσές τους.",
    color: "from-amber-600/20 to-amber-800/10",
    border: "border-amber-500/30 hover:border-amber-400/60",
    quiz: "/quiz/africa",
  },
  {
    href: "/learn/north-america",
    flag: "🌎",
    title: "Χώρες Βόρειας Αμερικής",
    desc: "Από τον Καναδά ως τον Παναμά — 15 χώρες και τα γεωγραφικά τους χαρακτηριστικά.",
    color: "from-cyan-600/20 to-cyan-800/10",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    quiz: "/quiz/north-america",
  },
  {
    href: "/learn/south-america",
    flag: "🌎",
    title: "Χώρες Νότιας Αμερικής",
    desc: "Βραζιλία, Αργεντινή και ακόμα 10 χώρες — γεωγραφία και πρωτεύουσες.",
    color: "from-lime-600/20 to-lime-800/10",
    border: "border-lime-500/30 hover:border-lime-400/60",
    quiz: "/quiz/south-america",
  },
];

export default function LearnIndexPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Μάθε Γεωγραφία — Εκπαιδευτικοί Οδηγοί | GeoMix</title>
        <meta name="description" content="Εκπαιδευτικοί οδηγοί γεωγραφίας για Ελλάδα, Ευρώπη, Ασία, Αφρική, Βόρεια και Νότια Αμερική. Χώρες, πρωτεύουσες, σημαίες και γεωγραφικά στοιχεία." />
        <meta name="keywords" content="μάθε γεωγραφία, εκπαιδευτικοί οδηγοί, χώρες ευρώπης, χώρες ασίας, χώρες αφρικής, πρωτεύουσες" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Μάθε Γεωγραφία — Εκπαιδευτικοί Οδηγοί | GeoMix" />
        <meta property="og:description" content="Δωρεάν εκπαιδευτικοί οδηγοί γεωγραφίας για κάθε ήπειρο." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold mb-4 text-slate-100">Μάθε Γεωγραφία</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Εκπαιδευτικοί οδηγοί για κάθε ήπειρο — χώρες, πρωτεύουσες, σημαίες και γεωγραφικά στοιχεία. Διάβασε πρώτα, μετά δοκίμασε το κουίζ!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ARTICLES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`group relative rounded-2xl border bg-gradient-to-br p-5 transition-all hover:-translate-y-1 ${a.color} ${a.border}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{a.flag}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-slate-100 text-base mb-1">{a.title}</h2>
                    <p className="text-sm text-slate-400 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    Διάβασε →
                  </span>
                  <span
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(a.quiz); }}
                    className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
                  >
                    🎯 Πήγαινε στο κουίζ
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <footer className="border-t border-slate-800 mt-8">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <span>© {new Date().getFullYear()} GeoMix · Δωρεάν εκπαιδευτική πλατφόρμα γεωγραφίας</span>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Πολιτική Απορρήτου</Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">Όροι Χρήσης</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
