import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αλβανία", capital: "Τίρανα" },
  { name: "Ανδόρα", capital: "Ανδόρα λα Βέλια" },
  { name: "Αυστρία", capital: "Βιέννη" },
  { name: "Βέλγιο", capital: "Βρυξέλλες" },
  { name: "Βοσνία-Ερζεγοβίνη", capital: "Σαράγεβο" },
  { name: "Βουλγαρία", capital: "Σόφια" },
  { name: "Γαλλία", capital: "Παρίσι" },
  { name: "Γερμανία", capital: "Βερολίνο" },
  { name: "Δανία", capital: "Κοπεγχάγη" },
  { name: "Ελβετία", capital: "Βέρνη" },
  { name: "Ελλάδα", capital: "Αθήνα" },
  { name: "Εσθονία", capital: "Ταλίν" },
  { name: "Ιρλανδία", capital: "Δουβλίνο" },
  { name: "Ισλανδία", capital: "Ρέικιαβικ" },
  { name: "Ισπανία", capital: "Μαδρίτη" },
  { name: "Ιταλία", capital: "Ρώμη" },
  { name: "Κοσσυφοπέδιο", capital: "Πρίστινα" },
  { name: "Κροατία", capital: "Ζάγκρεμπ" },
  { name: "Κύπρος", capital: "Λευκωσία" },
  { name: "Λετονία", capital: "Ρίγα" },
  { name: "Λευκορωσία", capital: "Μινσκ" },
  { name: "Λιθουανία", capital: "Βίλνιους" },
  { name: "Λιχτενστάιν", capital: "Βαντούτς" },
  { name: "Λουξεμβούργο", capital: "Λουξεμβούργο" },
  { name: "Μάλτα", capital: "Βαλέτα" },
  { name: "Μαυροβούνιο", capital: "Ποντγκόριτσα" },
  { name: "Μολδαβία", capital: "Κισινάου" },
  { name: "Μονακό", capital: "Μονακό" },
  { name: "Βόρεια Μακεδονία", capital: "Σκόπια" },
  { name: "Νορβηγία", capital: "Όσλο" },
  { name: "Ολλανδία", capital: "Άμστερνταμ" },
  { name: "Ουγγαρία", capital: "Βουδαπέστη" },
  { name: "Ουκρανία", capital: "Κίεβο" },
  { name: "Πολωνία", capital: "Βαρσοβία" },
  { name: "Πορτογαλία", capital: "Λισαβόνα" },
  { name: "Ρουμανία", capital: "Βουκουρέστι" },
  { name: "Σερβία", capital: "Βελιγράδι" },
  { name: "Σλοβακία", capital: "Μπρατισλάβα" },
  { name: "Σλοβενία", capital: "Λιουμπλιάνα" },
  { name: "Σουηδία", capital: "Στοκχόλμη" },
  { name: "Τουρκία", capital: "Άγκυρα" },
  { name: "Τσεχία", capital: "Πράγα" },
  { name: "Φινλανδία", capital: "Ελσίνκι" },
  { name: "Ηνωμένο Βασίλειο", capital: "Λονδίνο" },
];

export default function LearnEuropePage() {
  return (
    <>
      <Head>
        <title>Ευρώπη — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta
          name="description"
          content="Μάθε τις 44 χώρες της Ευρώπης και τις πρωτεύουσές τους. Γεωγραφικά στοιχεία, Fun Facts και σύνδεσμοι για κουίζ."
        />
        <meta
          name="keywords"
          content="χώρες ευρώπης, πρωτεύουσες ευρώπης, ευρωπαϊκές χώρες, γεωγραφία ευρώπης, κράτη ευρώπης"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ευρώπη — Πρωτεύουσες & Γεωγραφία | GeoMix"
        />
        <meta
          property="og:description"
          content="Πλήρης οδηγός για τις 44 χώρες της Ευρώπης με πρωτεύουσες και γεωγραφικά στοιχεία."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/europe" />
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
            <span className="text-slate-400">Ευρώπη</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌍</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Ευρώπη</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Ευρώπη αποτελείται από{" "}
            <strong className="text-slate-300">44 κυρίαρχα κράτη</strong> με
            συνολικό πληθυσμό περίπου{" "}
            <strong className="text-slate-300">748 εκατομμυρίων</strong>{" "}
            κατοίκων και έκταση{" "}
            <strong className="text-slate-300">10,5 εκατομμυρίων τ.χλμ.</strong>
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Γεωγραφική Εισαγωγή
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Ευρώπη είναι η δεύτερη μικρότερη ήπειρος, αλλά η τρίτη πιο
              πυκνοκατοικημένη στον κόσμο. Εκτείνεται από τον Ατλαντικό Ωκεανό
              στα δυτικά ως τα Ουράλια Όρη στα ανατολικά, και από τον Αρκτικό
              Ωκεανό στα βόρεια ως τη Μεσόγειο Θάλασσα στα νότια.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Τα σημαντικότερα ορεινά συστήματα είναι οι{" "}
              <strong className="text-slate-300">Άλπεις</strong> (με ψηλότερη
              κορυφή το Mont Blanc, 4.808 μ.), τα{" "}
              <strong className="text-slate-300">Πυρηναία</strong> μεταξύ
              Ισπανίας-Γαλλίας, τα{" "}
              <strong className="text-slate-300">Καρπάθια</strong> στην Κεντρική
              Ευρώπη και ο <strong className="text-slate-300">Καύκασος</strong>{" "}
              στα νοτιοανατολικά σύνορα.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Οι σημαντικότεροι ποταμοί είναι ο Βόλγας (μεγαλύτερος στην
              Ευρώπη), ο Ρήνος, ο Δούναβης (διασχίζει 10 χώρες) και ο Θάμεσης. Η
              Ευρώπη φιλοξενεί ορισμένες από τις παλαιότερες και μεγαλύτερες
              πόλεις στον κόσμο: το Λονδίνο, το Παρίσι, τη Ρώμη και τη Μόσχα.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">
              Όλες οι Χώρες & Πρωτεύουσες
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
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Fun Facts
            </h2>
            <ul className="space-y-3">
              {[
                "Το Βατικανό (εντός της Ρώμης) είναι το μικρότερο κράτος στον κόσμο με έκταση μόλις 0,44 τ.χλμ.",
                "Η Ρωσία είναι η μεγαλύτερη χώρα στον κόσμο — το ευρωπαϊκό τμήμα της αποτελεί περίπου το 40% της ηπείρου.",
                "Η Ευρωπαϊκή Ένωση αριθμεί 27 κράτη-μέλη και αντιπροσωπεύει μία από τις μεγαλύτερες οικονομίες παγκοσμίως.",
                "Η Νορβηγία, η Ισλανδία, η Ελβετία και το Λιχτενστάιν δεν ανήκουν στην ΕΕ, αλλά συνδέονται στενά με αυτή.",
                "Η πόλη με τους περισσότερους κατοίκους στην Ευρώπη (εκτός Μόσχας) είναι το Λονδίνο με πάνω από 9 εκατομμύρια.",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
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
              Ξέρεις όλες τις ευρωπαϊκές χώρες στον χάρτη;
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quiz/europe"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold transition-colors"
              >
                🗺️ Ευρώπη
              </Link>
              <Link
                href="/quiz/europe-capitals"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
              >
                🏛️ Πρωτεύουσες
              </Link>
              <Link
                href="/quiz/europe-flags"
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
