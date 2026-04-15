import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αίγυπτος", capital: "Κάιρο" },
  { name: "Αιθιοπία", capital: "Αντίς Αμπέμπα" },
  { name: "Αλγερία", capital: "Αλγέρι" },
  { name: "Ανγκόλα", capital: "Λουάντα" },
  { name: "Μπενίν", capital: "Πόρτο Νόβο" },
  { name: "Μποτσουάνα", capital: "Γκαμπορόνε" },
  { name: "Μπουρκίνα Φάσο", capital: "Ουαγκαντούγκου" },
  { name: "Μπουρούντι", capital: "Γκιτέγκα" },
  { name: "Καμερούν", capital: "Γιαουντέ" },
  { name: "Τσαντ", capital: "Ντζαμένα" },
  { name: "Κεντροαφρικανική Δημοκρατία", capital: "Μπανγκί" },
  { name: "Κομόρες", capital: "Μορόνι" },
  { name: "Λαϊκή Δημοκρατία Κονγκό", capital: "Κινσάσα" },
  { name: "Δημοκρατία Κονγκό", capital: "Μπραζαβίλ" },
  { name: "Ακτή Ελεφαντοστού", capital: "Γιαμουσουκρό" },
  { name: "Τζιμπουτί", capital: "Τζιμπουτί" },
  { name: "Ισημερινή Γουινέα", capital: "Μαλάμπο" },
  { name: "Ερυθραία", capital: "Ασμάρα" },
  { name: "Εσουατίνι", capital: "Μπαμπάνε" },
  { name: "Γκαμπόν", capital: "Λιμπρεβίλ" },
  { name: "Γκάνα", capital: "Άκρα" },
  { name: "Γκουινέα", capital: "Κόνακρι" },
  { name: "Γκουινέα-Μπισσάου", capital: "Μπισσάου" },
  { name: "Κένυα", capital: "Ναϊρόμπι" },
  { name: "Λεσότο", capital: "Μασέρου" },
  { name: "Λιβερία", capital: "Μονρόβια" },
  { name: "Λιβύη", capital: "Τρίπολη" },
  { name: "Μαδαγασκάρη", capital: "Αντανανάριβο" },
  { name: "Μαλάουι", capital: "Λιλόνγκουε" },
  { name: "Μαλί", capital: "Μπαμακό" },
  { name: "Μαυριτανία", capital: "Νουακσότ" },
  { name: "Μαυρίκιος", capital: "Πορ Λουί" },
  { name: "Μαρόκο", capital: "Ραμπάτ" },
  { name: "Μοζαμβίκη", capital: "Μαπούτο" },
  { name: "Ναμίμπια", capital: "Βίντχουκ" },
  { name: "Νίγηρας", capital: "Νιαμέι" },
  { name: "Νιγηρία", capital: "Αμπούτζα" },
  { name: "Ρουάντα", capital: "Κιγκάλι" },
  { name: "Σάο Τομέ και Πρίνσιπε", capital: "Σάο Τομέ" },
  { name: "Σενεγάλη", capital: "Ντακάρ" },
  { name: "Σιέρα Λεόνε", capital: "Φρίταουν" },
  { name: "Σομαλία", capital: "Μογκαντίσου" },
  { name: "Νότιος Αφρική", capital: "Πρετόρια" },
  { name: "Νότιο Σουδάν", capital: "Τζούμπα" },
  { name: "Σουδάν", capital: "Χαρτούμ" },
  { name: "Τανζανία", capital: "Ντοντόμα" },
  { name: "Τόγκο", capital: "Λομέ" },
  { name: "Τυνησία", capital: "Τύνιδα" },
  { name: "Ουγκάντα", capital: "Καμπάλα" },
  { name: "Ζάμπια", capital: "Λουσάκα" },
  { name: "Ζιμπάμπουε", capital: "Χαράρε" },
  { name: "Σεϋχέλλες", capital: "Βικτόρια" },
  { name: "Γκάμπια", capital: "Μπανζούλ" },
];

export default function LearnAfricaPage() {
  return (
    <>
      <Head>
        <title>Αφρική — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta
          name="description"
          content="Μάθε τις 53 χώρες της Αφρικής και τις πρωτεύουσές τους. Γεωγραφικά στοιχεία, Fun Facts και κουίζ."
        />
        <meta
          name="keywords"
          content="χώρες αφρικής, πρωτεύουσες αφρικής, αφρικανικές χώρες, γεωγραφία αφρικής, κράτη αφρικής"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Αφρική — Πρωτεύουσες & Γεωγραφία | GeoMix"
        />
        <meta
          property="og:description"
          content="Πλήρης οδηγός για τις 53 χώρες της Αφρικής με πρωτεύουσες και γεωγραφικά στοιχεία."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/africa" />
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
            <span className="text-slate-400">Αφρική</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌍</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Αφρική</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Αφρική είναι η{" "}
            <strong className="text-slate-300">
              δεύτερη μεγαλύτερη ήπειρος
            </strong>{" "}
            και φιλοξενεί τον{" "}
            <strong className="text-slate-300">μεγαλύτερο αριθμό κρατών</strong>{" "}
            στον κόσμο — <strong className="text-slate-300">54 χώρες</strong>{" "}
            συνολικά. Έκταση:{" "}
            <strong className="text-slate-300">30,3 εκ. τ.χλμ.</strong>,
            πληθυσμός: περίπου{" "}
            <strong className="text-slate-300">1,4 δισεκατομμύρια</strong>.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Γεωγραφική Εισαγωγή
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Αφρική εκτείνεται από τη Μεσόγειο Θάλασσα στα βόρεια ως τον
              Ακρωτήριο της Καλής Ελπίδας στα νότια. Χωρίζεται σε πέντε
              υποπεριοχές:{" "}
              <strong className="text-slate-300">Βόρεια Αφρική</strong>{" "}
              (Μαγκρέμπ + Αίγυπτος),{" "}
              <strong className="text-slate-300">Δυτική Αφρική</strong>,{" "}
              <strong className="text-slate-300">Κεντρική Αφρική</strong>,{" "}
              <strong className="text-slate-300">Ανατολική Αφρική</strong> και{" "}
              <strong className="text-slate-300">Νότια Αφρική</strong>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η μεγαλύτερη έρημος στον κόσμο, η{" "}
              <strong className="text-slate-300">Σαχάρα</strong> (9,2 εκ.
              τ.χλμ.), καλύπτει το μεγαλύτερο μέρος της Βόρειας Αφρικής. Ο{" "}
              <strong className="text-slate-300">Νείλος</strong>, ο μακρύτερος
              ποταμός στον κόσμο (6.650 χλμ.), πηγάζει από την κεντρική Αφρική
              και εκβάλλει στη Μεσόγειο. Ο{" "}
              <strong className="text-slate-300">Κονγκό</strong> είναι ο
              δεύτερος σε παροχή ποταμός στον κόσμο.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Το ψηλότερο βουνό της Αφρικής είναι το{" "}
              <strong className="text-slate-300">Κιλιμάντζαρο</strong> στην
              Τανζανία (5.895 μ.). Η Μεγάλη Ρηγματογόνος Ζώνη (Great Rift
              Valley) διασχίζει την Ανατολική Αφρική από βορρά ως νότο,
              φιλοξενώντας ορισμένες από τις μεγαλύτερες λίμνες στον κόσμο.
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
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Fun Facts
            </h2>
            <ul className="space-y-3">
              {[
                "Η Αφρική είναι η ήπειρος με τον ταχύτερα αυξανόμενο πληθυσμό — αναμένεται να φτάσει τα 2,5 δισεκατομμύρια ως το 2050.",
                "Η Νιγηρία είναι η πολυπληθέστερη χώρα της Αφρικής με πάνω από 220 εκατομμύρια κατοίκους.",
                "Η Αλγερία είναι η μεγαλύτερη χώρα της Αφρικής και η 10η μεγαλύτερη στον κόσμο.",
                "Η Νότια Αφρική έχει 3 επίσημες πρωτεύουσες: Πρετόρια (διοικητική), Κέιπ Τάουν (νομοθετική) και Μπλούμφοντέιν (δικαστική).",
                "Η Αιθιοπία είναι μία από τις ελάχιστες αφρικανικές χώρες που δεν αποικίστηκαν ποτέ από ευρωπαϊκές δυνάμεις.",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-amber-400 shrink-0 mt-0.5">→</span>
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
              Ξέρεις πού βρίσκεται κάθε αφρικανική χώρα στον χάρτη;
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quiz/africa"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-sm font-semibold transition-colors"
              >
                🗺️ Αφρική
              </Link>
              <Link
                href="/quiz/africa-capitals"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
              >
                🏛️ Πρωτεύουσες
              </Link>
              <Link
                href="/quiz/africa-flags"
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
