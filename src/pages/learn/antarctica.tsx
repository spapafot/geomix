import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const CLAIMS = [
  {
    country: "Νορβηγία",
    sector: "Γη της Βασίλισσας Μωδ",
    range: "20°W – 45°E",
  },
  {
    country: "Αυστραλία",
    sector: "Αυστραλιανή Ανταρκτική Επικράτεια",
    range: "45°E – 136°E / 142°E – 160°E",
  },
  { country: "Γαλλία", sector: "Γη Αντελί", range: "136°E – 142°E" },
  {
    country: "Νέα Ζηλανδία",
    sector: "Ανταρκτική Εξάρτηση Ρος",
    range: "160°E – 150°W",
  },
  {
    country: "Χιλή",
    sector: "Χιλιανή Ανταρκτική Επικράτεια",
    range: "53°W – 90°W",
  },
  {
    country: "Αργεντινή",
    sector: "Αργεντινή Ανταρκτική",
    range: "25°W – 74°W",
  },
  {
    country: "Βρετανία",
    sector: "Βρετανική Ανταρκτική Επικράτεια",
    range: "20°W – 80°W",
  },
];

const STATIONS = [
  { name: "McMurdo Station", country: "ΗΠΑ", capacity: "~1.000 καλοκαίρι" },
  { name: "Amundsen–Scott", country: "ΗΠΑ", capacity: "~150 (Νότιος Πόλος)" },
  { name: "Vostok Station", country: "Ρωσία", capacity: "~25" },
  { name: "Concordia Station", country: "Γαλλία / Ιταλία", capacity: "~60" },
  { name: "Halley Research Station", country: "Βρετανία", capacity: "~70" },
  { name: "Neumayer Station III", country: "Γερμανία", capacity: "~50" },
  { name: "Esperanza Base", country: "Αργεντινή", capacity: "~55 (μόνιμοι)" },
];

const RECORDS = [
  {
    label: "Χαμηλότερη θερμοκρασία που καταγράφηκε",
    value: "−89,2°C (Vostok, 1983)",
  },
  { label: "Μέση θερμοκρασία εσωτερικού χειμώνα", value: "περίπου −60°C" },
  { label: "Πάχος παγετώνα (μέγιστο)", value: "~4.800 μ." },
  { label: "Έκταση", value: "14 εκ. τ.χλμ. (περίπου 1,4× η Ευρώπη)" },
  {
    label: "Μέσο υψόμετρο",
    value: "~2.300 μ. — η ψηλότερη ήπειρος κατά μέσο όρο",
  },
  { label: "Γλυκό νερό", value: "~70% του παγκόσμιου αποθέματος γλυκού νερού" },
  { label: "Ταχύτητα ανέμου (ριπή)", value: "327 km/h (Commonwealth Bay)" },
];

export default function LearnAntarcticaPage() {
  return (
    <>
      <Head>
        <title>Ανταρκτική — Γεωγραφία & Επιστημονικοί Σταθμοί | GeoMix</title>
        <meta
          name="description"
          content="Μάθε για την Ανταρκτική: εδαφικές διεκδικήσεις, επιστημονικοί σταθμοί, γεωγραφικά ρεκόρ και η Συνθήκη της Ανταρκτικής."
        />
        <meta
          name="keywords"
          content="ανταρκτική γεωγραφία, συνθήκη ανταρκτικής, επιστημονικοί σταθμοί ανταρκτική, νότιος πόλος, εδαφικές διεκδικήσεις"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ανταρκτική — Γεωγραφία & Επιστημονικοί Σταθμοί | GeoMix"
        />
        <meta
          property="og:description"
          content="Η ήπειρος χωρίς χώρες — εδαφικές διεκδικήσεις, ρεκόρ και η Συνθήκη της Ανταρκτικής."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/antarctica" />
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
            <span className="text-slate-400">Ανταρκτική</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🧊</span>
            <h1 className="text-4xl font-extrabold text-slate-100">
              Ανταρκτική
            </h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η <strong className="text-slate-300">Ανταρκτική</strong> είναι η
            νοτιότερη ήπειρος του πλανήτη και η μοναδική χωρίς μόνιμο ανθρώπινο
            πληθυσμό ή κράτος. Καλύπτεται από έναν τεράστιο παγετώνα και
            φιλοξενεί τον <strong className="text-slate-300">Νότιο Πόλο</strong>
            . Η έκτασή της φτάνει τα{" "}
            <strong className="text-slate-300">14 εκατομμύρια τ.χλμ.</strong> —
            σχεδόν ενάμισι φορά η Ευρώπη.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Γεωγραφικά Ρεκόρ
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {RECORDS.map((r) => (
                <div
                  key={r.label}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 flex items-start justify-between gap-4"
                >
                  <span className="text-slate-400 text-sm">{r.label}</span>
                  <span className="text-slate-200 text-sm font-semibold shrink-0">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Η Συνθήκη της Ανταρκτικής
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Το <strong className="text-slate-300">1959</strong>, 12 χώρες
              υπέγραψαν τη{" "}
              <strong className="text-slate-300">
                Συνθήκη της Ανταρκτικής
              </strong>{" "}
              στην Ουάσιγκτον. Σήμερα έχει{" "}
              <strong className="text-slate-300">56 συμβαλλόμενα μέρη</strong>.
              Οι βασικές αρχές της:
            </p>
            <ul className="space-y-2">
              {[
                "Η Ανταρκτική χρησιμοποιείται αποκλειστικά για ειρηνικούς σκοπούς — απαγορεύονται στρατιωτικές δραστηριότητες.",
                "Ελεύθερη επιστημονική έρευνα και ανταλλαγή δεδομένων μεταξύ όλων των χωρών.",
                "Οι εδαφικές διεκδικήσεις «παγώνουν» — δεν αναγνωρίζονται νέες ούτε ακυρώνονται οι υπάρχουσες.",
                "Απαγόρευση πυρηνικών δοκιμών και απόρριψης ραδιενεργών αποβλήτων.",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Εδαφικές Διεκδικήσεις
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Επτά χώρες διεκδικούν τομείς της Ανταρκτικής — οι διεκδικήσεις
              Χιλής, Αργεντινής και Βρετανίας{" "}
              <strong className="text-slate-300">αλληλεπικαλύπτονται</strong>.
              Καμία διεκδίκηση δεν αναγνωρίζεται από τα περισσότερα κράτη του
              κόσμου.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {CLAIMS.map((c) => (
                <div
                  key={c.country}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-slate-200 text-sm font-medium">
                      {c.country}
                    </span>
                    <span className="text-slate-500 text-xs ml-2">
                      {c.sector}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs shrink-0">
                    {c.range}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Επιστημονικοί Σταθμοί
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Περίπου{" "}
              <strong className="text-slate-300">70 ενεργοί σταθμοί</strong> από
              ~30 χώρες λειτουργούν στην Ανταρκτική. Το καλοκαίρι
              (Νοέμβριος–Φεβρουάριος) ο πληθυσμός φτάνει τα{" "}
              <strong className="text-slate-300">5.000 άτομα</strong>, ενώ τον
              χειμώνα μειώνεται στα ~1.000.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STATIONS.map((s) => (
                <div
                  key={s.name}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5"
                >
                  <div className="text-slate-200 text-sm font-medium">
                    {s.name}
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-slate-500 text-xs">{s.country}</span>
                    <span className="text-slate-600 text-xs">{s.capacity}</span>
                  </div>
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
                "Η Ανταρκτική είναι τεχνικά η μεγαλύτερη έρημος στον κόσμο — λαμβάνει λιγότερες από 200 mm βροχόπτωσης ετησίως στο εσωτερικό της.",
                "Το 1969, η Αργεντινή έστειλε έγκυο γυναίκα στη βάση Esperanza — ο γιος της, Emilio Palma, είναι το πρώτο άτομο που γεννήθηκε στην Ανταρκτική.",
                "Κάτω από τον παγετώνα κρύβονται πάνω από 400 υπόγειες λίμνες — η μεγαλύτερη είναι η Λίμνη Βοστόκ, σε βάθος ~4 χλμ.",
                "Αν λιώσει ο παγετώνας της Ανταρκτικής, η στάθμη της θάλασσας θα ανέβει κατά ~58 μέτρα παγκοσμίως.",
                "Η Νορβηγία διεκδικεί τη μεγαλύτερη έκταση — η Γη της Βασίλισσας Μωδ αποτελεί το ~20% της ηπείρου.",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-cyan-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
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
