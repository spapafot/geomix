import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Επικοινωνία — GeoMix</title>
        <meta
          name="description"
          content="Επικοινώνησε με την ομάδα του GeoMix για ερωτήσεις, προτάσεις ή αναφορές σφαλμάτων."
        />
        <meta name="keywords" content="επικοινωνία geomix, contact geomix" />
        <meta property="og:title" content="Επικοινωνία — GeoMix" />
        <meta
          property="og:description"
          content="Στείλε μας μήνυμα για ερωτήσεις, προτάσεις ή αναφορές σφαλμάτων."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/contact" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">
            Επικοινωνία
          </h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Έχεις ερώτηση, πρόταση ή εντόπισες κάποιο σφάλμα; Θα χαρούμε να σε
            ακούσουμε.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-2xl mb-3">📧</div>
              <h2 className="font-bold text-slate-200 mb-2">
                Γενικές ερωτήσεις
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Για γενικές ερωτήσεις και πληροφορίες.
              </p>
              <a
                href="mailto:info@geomix.gr"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                info@geomix.gr
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-2xl mb-3">🐛</div>
              <h2 className="font-bold text-slate-200 mb-2">Υποστήριξη</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Εντόπισες λανθασμένη απάντηση;
              </p>
              <a
                href="mailto:support@geomix.gr"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                support@geomix.gr
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-2xl mb-3">✉️</div>
              <h2 className="font-bold text-slate-200 mb-2">Επικοινωνία</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Για προτάσεις, συνεργασίες ή οτιδήποτε άλλο.
              </p>
              <a
                href="mailto:contact@geomix.gr"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                contact@geomix.gr
              </a>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">
              Συχνές ερωτήσεις
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Το GeoMix είναι δωρεάν;",
                  a: "Ναι, το GeoMix είναι εντελώς δωρεάν και δεν απαιτεί εγγραφή ή λογαριασμό.",
                },
                {
                  q: "Μπορώ να χρησιμοποιήσω το GeoMix στην τάξη;",
                  a: "Φυσικά! Το GeoMix έχει σχεδιαστεί για εκπαιδευτική χρήση. Οι εκπαιδευτικοί μπορούν να το χρησιμοποιήσουν ελεύθερα για δραστηριότητες στην τάξη.",
                },
                {
                  q: "Εντόπισα λανθασμένη απάντηση — τι κάνω;",
                  a: "Στείλε μας email στο support@geomix.gr με το όνομα του κουίζ και την ερώτηση. Θα το διορθώσουμε το συντομότερο δυνατό.",
                },
                {
                  q: "Θα προσθέσετε περισσότερες χώρες ή ηπείρους;",
                  a: "Σχεδιάζουμε να επεκτείνουμε την πλατφόρμα με περισσότερα κουίζ. Στείλε μας τις προτάσεις σου!",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-slate-200 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-slate-800 pt-8">
            <Link
              href="/"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-colors"
            >
              ← Επιστροφή στην αρχική
            </Link>
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
