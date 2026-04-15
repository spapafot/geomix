import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const COUNTRIES = [
  { name: "Αυστραλία", capital: "Κανμπέρα" },
  { name: "Νέα Ζηλανδία", capital: "Ουέλινγκτον" },
  { name: "Παπούα Νέα Γουινέα", capital: "Πορτ Μόρεσμπι" },
  { name: "Φίτζι", capital: "Σούβα" },
  { name: "Νησιά Σολομώντα", capital: "Χονιάρα" },
  { name: "Βανουάτου", capital: "Πορτ Βίλα" },
  { name: "Σαμόα", capital: "Απία" },
  { name: "Κιριμπάτι", capital: "Νότια Τάραουα" },
  { name: "Τόνγκα", capital: "Νούκου'αλόφα" },
  { name: "Μικρονησία", capital: "Παλικίρ" },
  { name: "Παλάου", capital: "Νγκερουλμούντ" },
  { name: "Νησιά Μάρσαλ", capital: "Ματζούρο" },
  { name: "Ναουρού", capital: "Γιάρεν" },
  { name: "Νησιά Κουκ", capital: "Αβαρούα" },
  { name: "Νιούε", capital: "Αλόφι" },
  { name: "Γαλλική Πολυνησία", capital: "Παπεέτε" },
  { name: "Νέα Καληδονία", capital: "Νουμέα" },
  { name: "Γκουάμ", capital: "Χαγκάτνια" },
  { name: "Αμερικανική Σαμόα", capital: "Πάγκο Πάγκο" },
  { name: "Νήσοι Βόρειες Μαριάνες", capital: "Σαϊπάν" },
  { name: "Ουάλις και Φουτούνα", capital: "Ματά-Ουτού" },
];

export default function LearnOceaniaPage() {
  return (
    <>
      <Head>
        <title>Ωκεανία — Πρωτεύουσες & Γεωγραφία | GeoMix</title>
        <meta
          name="description"
          content="Μάθε τις χώρες της Ωκεανίας και τις πρωτεύουσές τους. Αυστραλία, Νέα Ζηλανδία και τα νησιωτικά κράτη του Ειρηνικού."
        />
        <meta
          name="keywords"
          content="χώρες ωκεανίας, πρωτεύουσες ωκεανίας, αυστραλία, νέα ζηλανδία, νησιά ειρηνικού, γεωγραφία ωκεανίας"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ωκεανία — Πρωτεύουσες & Γεωγραφία | GeoMix"
        />
        <meta
          property="og:description"
          content="Πλήρης οδηγός για τις χώρες της Ωκεανίας με πρωτεύουσες και γεωγραφικά στοιχεία."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/learn/oceania" />
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
            <span className="text-slate-400">Ωκεανία</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌊</span>
            <h1 className="text-4xl font-extrabold text-slate-100">Ωκεανία</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Η Ωκεανία περιλαμβάνει την{" "}
            <strong className="text-slate-300">Αυστραλία</strong>, τη{" "}
            <strong className="text-slate-300">Νέα Ζηλανδία</strong>, την{" "}
            <strong className="text-slate-300">Παπούα Νέα Γουινέα</strong> και
            δεκάδες νησιωτικά κράτη στον{" "}
            <strong className="text-slate-300">Ειρηνικό Ωκεανό</strong>. Σε
            έκταση φτάνει τα{" "}
            <strong className="text-slate-300">8,5 εκ. τ.χλμ.</strong> με
            πληθυσμό περίπου{" "}
            <strong className="text-slate-300">45 εκατομμυρίων</strong>.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Γεωγραφική Εισαγωγή
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η Ωκεανία χωρίζεται σε τέσσερις υποπεριοχές:{" "}
              <strong className="text-slate-300">Αυστραλασία</strong>{" "}
              (Αυστραλία, Νέα Ζηλανδία, Παπούα Νέα Γουινέα),{" "}
              <strong className="text-slate-300">Μελανησία</strong> (Φίτζι,
              Σολομώντα, Βανουάτου κ.ά.),{" "}
              <strong className="text-slate-300">Μικρονησία</strong> (Παλάου,
              Μικρονησία, Μάρσαλ κ.ά.) και{" "}
              <strong className="text-slate-300">Πολυνησία</strong> (Σαμόα,
              Τόνγκα, Γαλλική Πολυνησία κ.ά.).
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η <strong className="text-slate-300">Αυστραλία</strong> είναι η
              μεγαλύτερη χώρα της Ωκεανίας και η έκτη μεγαλύτερη στον κόσμο (7,7
              εκ. τ.χλμ.). Είναι η μόνη χώρα που καταλαμβάνει ολόκληρη ήπειρο.
              Το ψηλότερο βουνό της είναι το Κόσιουσκο (2.228 μ.).
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Η <strong className="text-slate-300">Νέα Ζηλανδία</strong>{" "}
              αποτελείται από δύο κύρια νησιά (Βόρειο και Νότιο) και
              χαρακτηρίζεται από ηφαίστεια, φιόρδ και ποικιλομορφία τοπίων. Η{" "}
              <strong className="text-slate-300">Παπούα Νέα Γουινέα</strong>{" "}
              είναι το δεύτερο μεγαλύτερο νησί στον κόσμο (μετά τη Γροιλανδία)
              και χαρακτηρίζεται από εξαιρετική βιοποικιλότητα.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Πολλά νησιωτικά κράτη της Ωκεανίας βρίσκονται σε σοβαρό κίνδυνο
              λόγω της{" "}
              <strong className="text-slate-300">
                ανόδου της στάθμης της θάλασσας
              </strong>{" "}
              από την κλιματική αλλαγή. Χώρες όπως το Κιριμπάτι και τα Νησιά
              Μάρσαλ έχουν μέσο υψόμετρο μόλις 2 μέτρα πάνω από τη θάλασσα.
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
                "Η Αυστραλία φιλοξενεί 10 από τα 15 πιο δηλητηριώδη φίδια στον κόσμο, καθώς και μοναδικά ζώα όπως το κολοάλα, το καγκουρό και το πλατύπους.",
                "Το Ναουρού είναι η μικρότερη νησιωτική χώρα στον κόσμο (21 τ.χλμ.) και η τρίτη μικρότερη χώρα συνολικά.",
                "Η Νέα Ζηλανδία ήταν η πρώτη χώρα στον κόσμο που έδωσε δικαίωμα ψήφου στις γυναίκες, το 1893.",
                "Το Κιριμπάτι είναι η μόνη χώρα στον κόσμο που βρίσκεται και στα τέσσερα ημισφαίρια — βόρειο, νότιο, ανατολικό και δυτικό.",
                "Η Παπούα Νέα Γουινέα είναι από τις πιο γλωσσικά ποικιλόμορφες χώρες στον κόσμο, με πάνω από 800 ζωντανές γλώσσες.",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-teal-400 shrink-0 mt-0.5">→</span>
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
