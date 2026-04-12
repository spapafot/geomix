import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const REGIONS = [
  { name: "Αττική", capital: "Αθήνα" },
  { name: "Κεντρική Μακεδονία", capital: "Θεσσαλονίκη" },
  { name: "Θεσσαλία", capital: "Λάρισα" },
  { name: "Ανατολική Μακεδονία & Θράκη", capital: "Κομοτηνή" },
  { name: "Κεντρική Ελλάδα", capital: "Λαμία" },
  { name: "Δυτική Ελλάδα", capital: "Πάτρα" },
  { name: "Πελοπόννησος", capital: "Τρίπολη" },
  { name: "Δυτική Μακεδονία", capital: "Κοζάνη" },
  { name: "Ήπειρος", capital: "Ιωάννινα" },
  { name: "Ιόνια Νησιά", capital: "Κέρκυρα" },
  { name: "Βόρειο Αιγαίο", capital: "Μυτιλήνη" },
  { name: "Νότιο Αιγαίο", capital: "Ερμούπολη" },
  { name: "Κρήτη", capital: "Ηράκλειο" },
];

export default function LearnGreecePage() {
  return (
    <>
      <Head>
        <title>Γεωγραφία Ελλάδας — Περιφέρειες, Νομοί & Πόλεις | GeoMix</title>
        <meta name="description" content="Μάθε τις 13 περιφέρειες και τους 74 νομούς της Ελλάδας. Πρωτεύουσες, γεωγραφικά χαρακτηριστικά και σημαντικές πόλεις." />
        <meta name="keywords" content="περιφέρειες ελλάδας, νομοί ελλάδας, γεωγραφία ελλάδας, ελληνικές περιφέρειες, πρωτεύουσες ελλάδας" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Γεωγραφία Ελλάδας — Περιφέρειες & Νομοί | GeoMix" />
        <meta property="og:description" content="Οδηγός για τις 13 περιφέρειες και τους 74 νομούς της Ελλάδας με πρωτεύουσες και γεωγραφικά στοιχεία." />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/greece" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">Μάθε Γεωγραφία</Link>
            <span>›</span>
            <span className="text-slate-400">Ελλάδα</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🇬🇷</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Γεωγραφία Ελλάδας</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Ελλάδα είναι χώρα στη νοτιοανατολική Ευρώπη με έκταση <strong className="text-slate-300">131.957 τ.χλμ.</strong> και πληθυσμό περίπου <strong className="text-slate-300">10,7 εκατομμυρίων</strong> κατοίκων. Η χώρα διαιρείται σε <strong className="text-slate-300">13 διοικητικές περιφέρειες</strong> και <strong className="text-slate-300">74 νομούς</strong>.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Γεωγραφική Εισαγωγή</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Ελλάδα βρίσκεται στη νότια άκρη της Βαλκανικής Χερσονήσου. Συνορεύει στα βορειοανατολικά με τη Βουλγαρία και την Τουρκία, στα βόρεια με τη Βόρεια Μακεδονία και στα βορειοδυτικά με την Αλβανία. Πλένεται από τρεις θάλασσες: το Αιγαίο Πέλαγος, το Ιόνιο Πέλαγος και τη Μεσόγειο Θάλασσα.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Χαρακτηριστικό γνώρισμα της ελληνικής γεωγραφίας είναι η <strong className="text-slate-300">νησιωτικότητα</strong>: η χώρα διαθέτει περισσότερα από <strong className="text-slate-300">6.000 νησιά</strong>, εκ των οποίων κατοικούνται περίπου 227. Τα μεγαλύτερα νησιά είναι η Κρήτη, η Εύβοια, η Λέσβος, η Ρόδος και η Χίος.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Το ψηλότερο βουνό της Ελλάδας είναι ο <strong className="text-slate-300">Όλυμπος</strong> με υψόμετρο 2.918 μέτρων, ενώ ο μεγαλύτερος ποταμός είναι ο Αλιάκμονας. Η ακτογραμμή της Ελλάδας, σε συνδυασμό με τα νησιά, αγγίζει τα <strong className="text-slate-300">16.000 χιλιόμετρα</strong> — από τις μακρύτερες στην Ευρώπη.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">Οι 13 Περιφέρειες της Ελλάδας</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Από το 2011 (Πρόγραμμα Καλλικράτης), η Ελλάδα διαιρείται σε 13 περιφέρειες. Κάθε περιφέρεια έχει εκλεγμένο περιφερειάρχη και περιφερειακό συμβούλιο.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REGIONS.map((r) => (
                <div key={r.name} className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-200 text-sm font-medium">{r.name}</span>
                  <span className="text-slate-500 text-xs">{r.capital}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Σημαντικές Πόλεις</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η <strong className="text-slate-300">Αθήνα</strong> είναι η πρωτεύουσα και μεγαλύτερη πόλη της Ελλάδας, με μητροπολιτικό πληθυσμό που ξεπερνά τα 3,5 εκατομμύρια. Είναι ένα από τα αρχαιότερα κατοικημένα μέρη στον κόσμο — η ιστορία της εκτείνεται σε βάθος 3.400 ετών.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η <strong className="text-slate-300">Θεσσαλονίκη</strong>, δεύτερη μεγαλύτερη πόλη, είναι το πολιτιστικό και εμπορικό κέντρο της Βόρειας Ελλάδας. Άλλες σημαντικές πόλεις είναι η Πάτρα (τρίτη σε μέγεθος), το Ηράκλειο (πρωτεύουσα Κρήτης), η Λάρισα (κέντρο Θεσσαλίας) και τα Ιωάννινα (κέντρο Ηπείρου).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Ενδιαφέροντα Γεγονότα</h2>
            <ul className="space-y-3">
              {[
                "Η Ελλάδα έχει τη μεγαλύτερη ακτογραμμή στη Μεσόγειο και την 11η μεγαλύτερη στον κόσμο.",
                "Το ελληνικό αλφάβητο είναι ένα από τα αρχαιότερα που χρησιμοποιούνται μέχρι σήμερα — αποτελεί τη βάση του λατινικού και κυριλλικού αλφαβήτου.",
                "Περίπου το 80% της Ελλάδας καλύπτεται από βουνά ή λόφους — είναι μία από τις πιο ορεινές χώρες της Ευρώπης.",
                "Η Ελλάδα φιλοξένησε τους πρώτους σύγχρονους Ολυμπιακούς Αγώνες το 1896 στην Αθήνα.",
                "Ο Άγιος Όρος (Άθως) στη Χαλκιδική είναι αυτόνομη μοναστική κοινότητα και μνημείο UNESCO.",
              ].map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quiz CTA */}
          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">Δοκίμασε τις γνώσεις σου!</h3>
            <p className="text-slate-400 text-sm mb-4">Τώρα που διάβασες για τη γεωγραφία της Ελλάδας, είσαι έτοιμος για το κουίζ;</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quiz" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-colors">
                🗺️ Περιφέρειες Ελλάδας
              </Link>
              <Link href="/quiz/nomoi" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                📍 Νομοί Ελλάδας
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
