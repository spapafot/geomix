import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αζερμπαϊτζάν", capital: "Μπακού" },
  { name: "Αρμενία", capital: "Ερεβάν" },
  { name: "Αφγανιστάν", capital: "Καμπούλ" },
  { name: "Μπαχρέιν", capital: "Μανάμα" },
  { name: "Μπαγκλαντές", capital: "Ντάκα" },
  { name: "Μπουτάν", capital: "Θιμφού" },
  { name: "Μπρουνέι", capital: "Μπαντάρ Σερί Μπεγκαβάν" },
  { name: "Καμπότζη", capital: "Πνομ Πεν" },
  { name: "Κίνα", capital: "Πεκίνο" },
  { name: "Κύπρος", capital: "Λευκωσία" },
  { name: "Γεωργία", capital: "Τιφλίδα" },
  { name: "Ινδία", capital: "Νέο Δελχί" },
  { name: "Ινδονησία", capital: "Τζακάρτα" },
  { name: "Ιράν", capital: "Τεχεράνη" },
  { name: "Ιράκ", capital: "Βαγδάτη" },
  { name: "Ισραήλ", capital: "Ιερουσαλήμ" },
  { name: "Ιαπωνία", capital: "Τόκιο" },
  { name: "Ιορδανία", capital: "Αμμάν" },
  { name: "Καζακστάν", capital: "Αστάνα" },
  { name: "Κουβέιτ", capital: "Πόλη του Κουβέιτ" },
  { name: "Κιργιζία", capital: "Μπισκέκ" },
  { name: "Λάος", capital: "Βιεντιάν" },
  { name: "Λίβανος", capital: "Βηρυτός" },
  { name: "Μαλαισία", capital: "Κουάλα Λουμπούρ" },
  { name: "Μαλδίβες", capital: "Μαλέ" },
  { name: "Μογγολία", capital: "Ουλάν Μπατόρ" },
  { name: "Μιανμάρ", capital: "Νάι Πι Ντο" },
  { name: "Νεπάλ", capital: "Κατμαντού" },
  { name: "Βόρεια Κορέα", capital: "Πιονγιάνγκ" },
  { name: "Ομάν", capital: "Μασκάτ" },
  { name: "Πακιστάν", capital: "Ισλαμαμπάντ" },
  { name: "Παλαιστίνη", capital: "Ραμάλα" },
  { name: "Φιλιππίνες", capital: "Μανίλα" },
  { name: "Κατάρ", capital: "Ντόχα" },
  { name: "Σαουδική Αραβία", capital: "Ριάντ" },
  { name: "Σιγκαπούρη", capital: "Σιγκαπούρη" },
  { name: "Νότια Κορέα", capital: "Σεούλ" },
  { name: "Σρι Λάνκα", capital: "Κολόμπο" },
  { name: "Συρία", capital: "Δαμασκός" },
  { name: "Τατζικιστάν", capital: "Ντουσαμπέ" },
  { name: "Ταϊλάνδη", capital: "Μπανγκόκ" },
  { name: "Τιμόρ-Λέστε", capital: "Ντίλι" },
  { name: "Τουρκμενιστάν", capital: "Ασγκαμπάτ" },
  { name: "Ηνωμένα Αραβικά Εμιράτα", capital: "Αμπού Ντάμπι" },
  { name: "Ουζμπεκιστάν", capital: "Τασκένδη" },
  { name: "Βιετνάμ", capital: "Ανόι" },
  { name: "Υεμένη", capital: "Σαναά" },
];

export default function LearnAsiaPage() {
  return (
    <>
      <Head>
        <title>Χώρες Ασίας — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta name="description" content="Μάθε τις χώρες της Ασίας και τις πρωτεύουσές τους. Η μεγαλύτερη ήπειρος — από την Ιαπωνία ως την Τουρκία. Γεωγραφία, στοιχεία και κουίζ." />
        <meta name="keywords" content="χώρες ασίας, πρωτεύουσες ασίας, ασιατικές χώρες, γεωγραφία ασίας, κράτη ασίας" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Χώρες Ασίας — Πρωτεύουσες & Γεωγραφία | GeoMix" />
        <meta property="og:description" content="Πλήρης οδηγός για τις χώρες της Ασίας με πρωτεύουσες και γεωγραφικά στοιχεία." />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/asia" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">Μάθε Γεωγραφία</Link>
            <span>›</span>
            <span className="text-slate-400">Ασία</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌏</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Χώρες Ασίας</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Ασία είναι η <strong className="text-slate-300">μεγαλύτερη ήπειρος</strong> στον κόσμο, τόσο σε έκταση (<strong className="text-slate-300">44,5 εκ. τ.χλμ.</strong>) όσο και σε πληθυσμό (<strong className="text-slate-300">4,7 δισεκατομμύρια</strong> κάτοικοι — πάνω από το 60% του παγκόσμιου πληθυσμού).
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Γεωγραφική Εισαγωγή</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Ασία εκτείνεται από τον Αρκτικό Ωκεανό στα βόρεια ως τον Ινδικό Ωκεανό στα νότια, και από τον Ουράλιο Ποταμό στα δυτικά ως τον Ειρηνικό Ωκεανό στα ανατολικά. Συνορεύει με την Ευρώπη στα δυτικά (σχηματίζοντας μαζί της τη <strong className="text-slate-300">Ευρασία</strong>) και με την Αφρική μέσω της Διώρυγας του Σουέζ.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Ασία φιλοξενεί τη <strong className="text-slate-300">ψηλότερη κορυφή στον κόσμο</strong>, το Έβερεστ (8.849 μ.) στα Ιμαλάια, αλλά και το <strong className="text-slate-300">χαμηλότερο σημείο της ξηράς</strong>, τη Νεκρά Θάλασσα (−430 μ.). Τα μεγαλύτερα ποτάμια του κόσμου — ο Γάγγης, ο Ινδός, ο Γιανγκτσέ και ο Μεκόνγκ — ξεκινούν από αυτή την ήπειρο.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Η Ασία χωρίζεται σε πέντε υποπεριοχές: <strong className="text-slate-300">Ανατολική Ασία</strong> (Κίνα, Ιαπωνία, Κορέα), <strong className="text-slate-300">Νοτιοανατολική Ασία</strong> (Ταϊλάνδη, Βιετνάμ, κ.ά.), <strong className="text-slate-300">Νότια Ασία</strong> (Ινδία, Πακιστάν), <strong className="text-slate-300">Κεντρική Ασία</strong> και <strong className="text-slate-300">Δυτική Ασία / Μέση Ανατολή</strong>.
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
                "Η Κίνα και η Ινδία είναι οι δύο πολυπληθέστερες χώρες στον κόσμο — μαζί φιλοξενούν σχεδόν 3 δισεκατομμύρια ανθρώπους.",
                "Η Ρωσία, αν και κυρίως ευρωπαϊκή χώρα, έχει τη μεγαλύτερη ασιατική επικράτεια — τη Σιβηρία.",
                "Η Ιαπωνία αποτελείται από περίπου 6.852 νησιά, εκ των οποίων τα τέσσερα κύρια είναι Χονσού, Χοκάιντο, Κιούσου και Σικόκου.",
                "Το Καζακστάν είναι η μεγαλύτερη χώρα στον κόσμο που δεν έχει πρόσβαση στη θάλασσα.",
                "Η Σαουδική Αραβία δεν έχει κανέναν μόνιμο ποταμό — η χώρα βασίζεται αποκλειστικά στα υπόγεια ύδατα και στην αφαλάτωση.",
              ].map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-sky-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">Δοκίμασε τις γνώσεις σου!</h3>
            <p className="text-slate-400 text-sm mb-4">Ξέρεις πού βρίσκεται κάθε ασιατική χώρα στον χάρτη;</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quiz/asia" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-lg text-sm font-semibold transition-colors">
                🗺️ Χώρες Ασίας
              </Link>
              <Link href="/quiz/asia-capitals" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                🏛️ Πρωτεύουσες
              </Link>
              <Link href="/quiz/asia-flags" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
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
