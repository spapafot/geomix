import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αντίγκουα και Μπαρμπούντα", capital: "Σεντ Τζονς" },
  { name: "Μπαχάμες", capital: "Νάσσαου" },
  { name: "Μπελίζε", capital: "Μπελμόπαν" },
  { name: "Καναδάς", capital: "Οτάβα" },
  { name: "Κόστα Ρίκα", capital: "Σαν Χοσέ" },
  { name: "Κούβα", capital: "Αβάνα" },
  { name: "Δομινικανή Δημοκρατία", capital: "Σάντο Ντομίνγκο" },
  { name: "Ελ Σαλβαδόρ", capital: "Σαν Σαλβαδόρ" },
  { name: "Γουατεμάλα", capital: "Πόλη της Γουατεμάλας" },
  { name: "Αΐτη", capital: "Πορτ-ο-Πρενς" },
  { name: "Ονδούρα", capital: "Τεγκουσιγκάλπα" },
  { name: "Τζαμάικα", capital: "Κίνγκστον" },
  { name: "Μεξικό", capital: "Πόλη του Μεξικού" },
  { name: "Νικαράγουα", capital: "Μανάγκουα" },
  { name: "Παναμάς", capital: "Πόλη του Παναμά" },
  { name: "ΗΠΑ", capital: "Ουάσινγκτον Ντ.Κ." },
];

export default function LearnNorthAmericaPage() {
  return (
    <>
      <Head>
        <title>Χώρες Βόρειας Αμερικής — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta name="description" content="Μάθε τις χώρες της Βόρειας Αμερικής και τις πρωτεύουσές τους. Από τον Καναδά ως τον Παναμά — γεωγραφία, στοιχεία και κουίζ." />
        <meta name="keywords" content="χώρες βόρειας αμερικής, πρωτεύουσες βόρειας αμερικής, γεωγραφία βόρειας αμερικής, κεντρική αμερική" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Χώρες Βόρειας Αμερικής — Πρωτεύουσες & Γεωγραφία | GeoMix" />
        <meta property="og:description" content="Οδηγός γεωγραφίας για τις χώρες της Βόρειας Αμερικής με πρωτεύουσες και στοιχεία." />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/north-america" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">Μάθε Γεωγραφία</Link>
            <span>›</span>
            <span className="text-slate-400">Βόρεια Αμερική</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌎</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Χώρες Βόρειας Αμερικής</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Βόρεια Αμερική εκτείνεται από τον <strong className="text-slate-300">Αρκτικό Ωκεανό</strong> στα βόρεια ως τον <strong className="text-slate-300">Παναμά</strong> στα νότια. Περιλαμβάνει <strong className="text-slate-300">23 κυρίαρχα κράτη</strong>, με συνολική έκταση <strong className="text-slate-300">24,7 εκ. τ.χλμ.</strong> και πληθυσμό περίπου <strong className="text-slate-300">600 εκατομμυρίων</strong>.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Γεωγραφική Εισαγωγή</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Βόρεια Αμερική χωρίζεται γεωγραφικά σε τρεις βασικές περιοχές: τον <strong className="text-slate-300">Καναδά και τις ΗΠΑ</strong> (Αγγλόφωνη Βόρεια Αμερική), το <strong className="text-slate-300">Μεξικό</strong> (Ισπανόφωνη Βόρεια Αμερική) και την <strong className="text-slate-300">Κεντρική Αμερική</strong> με τα νησιά της Καραϊβικής.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Τα Βραχώδη Όρη (Rocky Mountains) στα δυτικά και τα Απαλάχια στα ανατολικά αποτελούν τα κύρια ορεινά συστήματα. Ο <strong className="text-slate-300">Μισισιπής-Μιζούρι</strong> είναι το μεγαλύτερο ποτάμιο σύστημα της ηπείρου. Τα <strong className="text-slate-300">Μεγάλα Λιμάνια</strong> (Great Lakes) στα σύνορα ΗΠΑ-Καναδά αποτελούν τη μεγαλύτερη συλλογή γλυκού νερού στον κόσμο.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Η Κεντρική Αμερική αποτελείται από 7 μικρές χώρες μεταξύ Μεξικού και Κολομβίας. Η Καραϊβική φιλοξενεί δεκάδες νησιά, εκ των οποίων η Κούβα, η Αϊτή/Δομινικανή Δημοκρατία, η Τζαμάικα και το Πουέρτο Ρίκο είναι οι μεγαλύτερες.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">Χώρες & Πρωτεύουσες</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <div key={c.name} className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between">
                  <span className="text-slate-200 text-sm font-medium">{c.name}</span>
                  <span className="text-slate-500 text-xs">{c.capital}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Ενδιαφέροντα Γεγονότα</h2>
            <ul className="space-y-3">
              {[
                "Ο Καναδάς είναι η δεύτερη μεγαλύτερη χώρα στον κόσμο σε έκταση, αλλά έχει πληθυσμό μικρότερο από αυτόν της Καλιφόρνιας.",
                "Το Μεξικό Σίτι είναι μία από τις μεγαλύτερες μητροπολιτικές περιοχές στον κόσμο, με πάνω από 21 εκατομμύρια κατοίκους.",
                "Η Κόστα Ρίκα δεν διαθέτει στρατό από το 1948 — είναι μία από τις λίγες χώρες στον κόσμο χωρίς ένοπλες δυνάμεις.",
                "Η Διώρυγα του Παναμά, που συνδέει τον Ατλαντικό με τον Ειρηνικό Ωκεανό, άνοιξε το 1914 και είναι μία από τις σημαντικότερες ναυτιλιακές διαδρομές στον κόσμο.",
                "Η Αϊτή ήταν η πρώτη χώρα στον κόσμο που ανέκτησε την ανεξαρτησία της μετά από επανάσταση σκλάβων, το 1804.",
              ].map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-cyan-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">Δοκίμασε τις γνώσεις σου!</h3>
            <p className="text-slate-400 text-sm mb-4">Ξέρεις πού βρίσκεται κάθε χώρα της Βόρειας Αμερικής;</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quiz/north-america" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold transition-colors">
                🗺️ Χώρες Βόρειας Αμερικής
              </Link>
              <Link href="/quiz/north-america-capitals" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                🏛️ Πρωτεύουσες
              </Link>
              <Link href="/quiz/north-america-flags" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                🚩 Σημαίες
              </Link>
            </div>
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
