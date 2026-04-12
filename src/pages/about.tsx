import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Σχετικά με το GeoMix — Εκπαιδευτική Πλατφόρμα Γεωγραφίας</title>
        <meta name="description" content="Μάθε τι είναι το GeoMix, πώς λειτουργεί και γιατί είναι ο καλύτερος δωρεάν τρόπος να μάθεις γεωγραφία διαδραστικά." />
        <meta name="keywords" content="geomix, εκπαιδευτική πλατφόρμα γεωγραφίας, κουίζ γεωγραφίας, μάθε γεωγραφία" />
        <meta property="og:title" content="Σχετικά με το GeoMix" />
        <meta property="og:description" content="Δωρεάν διαδραστική πλατφόρμα γεωγραφίας για μαθητές και φοιτητές." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/about" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">Σχετικά με το GeoMix</h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Το GeoMix είναι μια δωρεάν, διαδραστική πλατφόρμα γεωγραφίας που βοηθά μαθητές, φοιτητές και απλούς λάτρεις της γεωγραφίας να μάθουν χώρες, πρωτεύουσες και σημαίες μέσα από παιχνίδια.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Τι είναι το GeoMix;</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Το GeoMix είναι ένα εκπαιδευτικό εργαλείο που συνδυάζει διαδραστικούς χάρτες με κουίζ γεωγραφίας. Μπορείς να δοκιμάσεις τις γνώσεις σου στις χώρες της Ευρώπης, Ασίας, Αφρικής, Βόρειας και Νότιας Αμερικής — αλλά και των περιφερειών και νομών της Ελλάδας.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Κάθε κουίζ έχει τρεις τρόπους παιχνιδιού: το κλασικό κουίζ (βρες τη χώρα στον χάρτη), το αντίστροφο (επίλεξε το σωστό όνομα ή σημαία από 4 επιλογές) και την Εξερεύνηση (κάνε κλικ σε κάθε χώρα για να δεις πληροφορίες).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Για ποιους είναι;</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5">→</span>
                <span><strong className="text-slate-300">Μαθητές Δημοτικού, Γυμνασίου και Λυκείου</strong> που ετοιμάζονται για εξετάσεις γεωγραφίας.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5">→</span>
                <span><strong className="text-slate-300">Φοιτητές</strong> σπουδών που απαιτούν γνώση διεθνούς γεωγραφίας.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5">→</span>
                <span><strong className="text-slate-300">Όσους παρακολουθούν διαγωνισμούς γνώσεων</strong> ή απλώς αγαπούν τη γεωγραφία.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5">→</span>
                <span><strong className="text-slate-300">Εκπαιδευτικούς</strong> που θέλουν ένα εργαλείο για δραστηριότητες στην τάξη.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Πώς λειτουργεί;</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Επίλεξε κουίζ", desc: "Διάλεξε ήπειρο και τύπο: χώρες, πρωτεύουσες ή σημαίες." },
                { step: "2", title: "Παίξε", desc: "Βρες τη χώρα στον χάρτη ή επίλεξε από 4 επιλογές. Λαμβάνεις άμεση ανατροφοδότηση." },
                { step: "3", title: "Μάθε", desc: "Δες το αποτέλεσμά σου και ξαναπαίξε για να βελτιώσεις τη βαθμολογία σου." },
              ].map((s) => (
                <div key={s.step} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-blue-400 mb-2">{s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Γιατί GeoMix;</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Σε αντίθεση με στατικές λίστες ή φλάσκαρτς, το GeoMix χρησιμοποιεί διαδραστικούς χάρτες για να συνδέσει κάθε χώρα με τη γεωγραφική της θέση. Έρευνες δείχνουν ότι η οπτικοχωρική μάθηση βοηθά στη μακροπρόθεσμη απομνημόνευση.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Το GeoMix είναι εντελώς <strong className="text-slate-300">δωρεάν</strong>, δεν απαιτεί εγγραφή και λειτουργεί σε κάθε συσκευή — υπολογιστή, tablet ή κινητό.
            </p>
          </section>

          <div className="border-t border-slate-800 pt-8 flex flex-wrap gap-4">
            <Link href="/" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-colors">
              Ξεκίνα το κουίζ →
            </Link>
            <Link href="/contact" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition-colors text-slate-300">
              Επικοινωνία
            </Link>
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
