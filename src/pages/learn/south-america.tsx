import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αργεντινή", capital: "Μπουένος Άιρες" },
  { name: "Βολιβία", capital: "Σούκρε / Λα Πας" },
  { name: "Βραζιλία", capital: "Μπραζίλια" },
  { name: "Χιλή", capital: "Σαντιάγο" },
  { name: "Κολομβία", capital: "Μπογκοτά" },
  { name: "Εκουαδόρ", capital: "Κίτο" },
  { name: "Γουιάνα", capital: "Τζόρτζταουν" },
  { name: "Παραγουάη", capital: "Ασουνθιόν" },
  { name: "Περού", capital: "Λίμα" },
  { name: "Σουρινάμ", capital: "Παραμαρίμπο" },
  { name: "Ουρουγουάη", capital: "Μοντεβιδέο" },
  { name: "Βενεζουέλα", capital: "Καράκας" },
];

export default function LearnSouthAmericaPage() {
  return (
    <>
      <Head>
        <title>Νότια Αμερική — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta
          name="description"
          content="Μάθε τις 12 χώρες της Νότιας Αμερικής και τις πρωτεύουσές τους. Αμαζόνιος, Άνδεις και τα πιο εντυπωσιακά τοπία στον κόσμο."
        />
        <meta
          name="keywords"
          content="χώρες νότιας αμερικής, πρωτεύουσες νότιας αμερικής, γεωγραφία νότιας αμερικής, βραζιλία αργεντινή"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Νότια Αμερική — Πρωτεύουσες & Γεωγραφία | GeoMix"
        />
        <meta
          property="og:description"
          content="Πλήρης οδηγός για τις 12 χώρες της Νότιας Αμερικής με πρωτεύουσες και γεωγραφικά στοιχεία."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/south-america" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link
              href="/learn"
              className="hover:text-slate-300 transition-colors"
            >
              Μάθε Γεωγραφία
            </Link>
            <span>›</span>
            <span className="text-slate-400">Νότια Αμερική</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌎</span>
            <h1 className="text-4xl font-extrabold text-slate-100">
              Νότια Αμερική
            </h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Νότια Αμερική αποτελείται από{" "}
            <strong className="text-slate-300">12 κυρίαρχα κράτη</strong> με
            συνολική έκταση{" "}
            <strong className="text-slate-300">17,8 εκ. τ.χλμ.</strong> και
            πληθυσμό περίπου{" "}
            <strong className="text-slate-300">440 εκατομμυρίων</strong>. Είναι
            η τέταρτη μεγαλύτερη ήπειρος σε έκταση.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Γεωγραφική Εισαγωγή
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Νότια Αμερική συνδέεται με τη Βόρεια Αμερική μέσω του Παναμά.
              Στα δυτικά της εκτείνονται οι{" "}
              <strong className="text-slate-300">Άνδεις</strong>, η μακρύτερη
              οροσειρά στον κόσμο (7.000 χλμ.), με ψηλότερη κορυφή τον{" "}
              <strong className="text-slate-300">Άκονκάγκουα</strong> στην
              Αργεντινή (6.961 μ.) — την ψηλότερη κορυφή εκτός Ασίας.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Ο <strong className="text-slate-300">Αμαζόνιος</strong>, ο
              μεγαλύτερος ποταμός στον κόσμο σε όγκο νερού, ρέει από τις Άνδεις
              ως τον Ατλαντικό Ωκεανό, διασχίζοντας τη Βραζιλία. Το τροπικό
              δάσος της Αμαζονίας — «ο πνεύμονας της Γης» — καλύπτει περίπου 5,5
              εκατομμύρια τ.χλμ.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Στα νότια, η Παταγονία αποτελεί μια από τις πιο απομακρυσμένες και
              αραιοκατοικημένες περιοχές στον κόσμο. Η{" "}
              <strong className="text-slate-300">Λίμνη Τιτικάκα</strong>, στα
              σύνορα Περού-Βολιβίας, είναι η υψηλότερα τοποθετημένη πλωτή λίμνη
              στον κόσμο (3.812 μ.).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">
              Χώρες & Πρωτεύουσες
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <div
                  key={c.name}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between"
                >
                  <span className="text-slate-200 text-sm font-medium">
                    {c.name}
                  </span>
                  <span className="text-slate-500 text-xs">{c.capital}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-3">
              * Η Βολιβία έχει δύο πρωτεύουσες: Σούκρε (συνταγματική) και Λα Πας
              (διοικητική).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Fun Facts
            </h2>
            <ul className="space-y-3">
              {[
                "Η Βραζιλία είναι η μεγαλύτερη χώρα στη Νότια Αμερική και η 5η μεγαλύτερη στον κόσμο — καταλαμβάνει σχεδόν τη μισή ήπειρο.",
                "Η Αργεντινή έχει τη μεγαλύτερη κατανάλωση κρέατος ανά κεφαλή στον κόσμο — κυρίως βοδινό.",
                "Η Χιλή είναι η πιο στενόμακρη χώρα στον κόσμο: 4.300 χλμ. μήκος αλλά μόλις 350 χλμ. μέσο πλάτος.",
                "Το Μπουένος Άιρες της Αργεντινής είναι γνωστό ως «το Παρίσι της Νότιας Αμερικής» λόγω της ευρωπαϊκής αρχιτεκτονικής και κουλτούρας του.",
                "Το Περού φιλοξενεί το Μάτσου Πίτσου, αρχαία πόλη των Ίνκας και μνημείο UNESCO που ανακαλύφθηκε από Δυτικούς το 1911.",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-lime-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">
              Δοκίμασε τις γνώσεις σου!
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Ξέρεις πού βρίσκεται κάθε χώρα της Νότιας Αμερικής;
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quiz/south-america"
                className="px-4 py-2 bg-lime-600 hover:bg-lime-500 rounded-lg text-sm font-semibold transition-colors"
              >
                🗺️ Νότια Αμερική
              </Link>
              <Link
                href="/quiz/south-america-capitals"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
              >
                🏛️ Πρωτεύουσες
              </Link>
              <Link
                href="/quiz/south-america-flags"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
              >
                🚩 Σημαίες
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t border-slate-800 mt-8">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <span>
              © {new Date().getFullYear()} GeoMix · Δωρεάν εκπαιδευτική
              πλατφόρμα γεωγραφίας
            </span>
            <div className="flex gap-4">
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
          </div>
        </footer>
      </div>
    </>
  );
}
