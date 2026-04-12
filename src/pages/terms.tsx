import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Όροι Χρήσης — GeoMix</title>
        <meta name="description" content="Οι όροι χρήσης της πλατφόρμας GeoMix. Διαβάστε τους κανόνες και τις προϋποθέσεις χρήσης." />
        <meta property="og:title" content="Όροι Χρήσης — GeoMix" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/terms" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">Όροι Χρήσης</h1>
          <p className="text-slate-500 text-sm mb-12">Τελευταία ενημέρωση: Απρίλιος 2026</p>

          <div className="space-y-10">

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">1. Αποδοχή Όρων</h2>
              <p className="text-slate-400 leading-relaxed">
                Με τη χρήση της πλατφόρμας GeoMix (<strong className="text-slate-300">geomix.gr</strong>), αποδέχεστε τους παρόντες Όρους Χρήσης. Εάν δεν συμφωνείτε με αυτούς, παρακαλούμε μη χρησιμοποιείτε την υπηρεσία.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">2. Περιγραφή Υπηρεσίας</h2>
              <p className="text-slate-400 leading-relaxed">
                Το GeoMix είναι μια δωρεάν εκπαιδευτική πλατφόρμα διαδραστικών κουίζ γεωγραφίας. Η πλατφόρμα παρέχεται «ως έχει» (as-is) χωρίς εγγύηση αδιάλειπτης λειτουργίας.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">3. Αποδεκτή Χρήση</h2>
              <p className="text-slate-400 leading-relaxed mb-3">Συμφωνείτε ότι θα χρησιμοποιείτε την πλατφόρμα αποκλειστικά για νόμιμους και εκπαιδευτικούς σκοπούς. Απαγορεύεται:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-red-400 mt-0.5 shrink-0">✗</span><span>Η χρήση αυτόματων εργαλείων (bots) για την πρόσβαση στην υπηρεσία.</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-0.5 shrink-0">✗</span><span>Η αντιγραφή ή αναδημοσίευση περιεχομένου χωρίς άδεια.</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-0.5 shrink-0">✗</span><span>Οποιαδήποτε ενέργεια που παρεμποδίζει την ομαλή λειτουργία της πλατφόρμας.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">4. Πνευματική Ιδιοκτησία</h2>
              <p className="text-slate-400 leading-relaxed">
                Το σύνολο του περιεχομένου της πλατφόρμας (κώδικας, σχεδιασμός, κείμενα) ανήκει στο GeoMix και προστατεύεται από την ισχύουσα νομοθεσία περί πνευματικής ιδιοκτησίας. Τα γεωγραφικά δεδομένα προέρχονται από ανοιχτές πηγές (Natural Earth, OpenStreetMap).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">5. Ακρίβεια Περιεχομένου</h2>
              <p className="text-slate-400 leading-relaxed">
                Καταβάλλουμε κάθε δυνατή προσπάθεια για την ακρίβεια των γεωγραφικών δεδομένων και των απαντήσεων των κουίζ. Ωστόσο, δεν εγγυόμαστε την απόλυτη ακρίβεια. Εάν εντοπίσετε σφάλμα, παρακαλούμε επικοινωνήστε μαζί μας στο{" "}
                <a href="mailto:support@geomix.gr" className="text-blue-400 hover:text-blue-300">support@geomix.gr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">6. Διαφημίσεις</h2>
              <p className="text-slate-400 leading-relaxed">
                Η πλατφόρμα ενδέχεται να εμφανίζει διαφημίσεις μέσω Google AdSense για τη χρηματοδότηση της δωρεάν υπηρεσίας. Οι διαφημίσεις υπόκεινται στους όρους και την πολιτική της Google.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">7. Περιορισμός Ευθύνης</h2>
              <p className="text-slate-400 leading-relaxed">
                Το GeoMix δεν φέρει ευθύνη για οποιαδήποτε άμεση ή έμμεση ζημία που προκύπτει από τη χρήση ή την αδυναμία χρήσης της πλατφόρμας. Η υπηρεσία παρέχεται για εκπαιδευτικούς σκοπούς και δεν αποτελεί επίσημη εκπαιδευτική πηγή.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">8. Εφαρμοστέο Δίκαιο</h2>
              <p className="text-slate-400 leading-relaxed">
                Οι παρόντες Όροι Χρήσης διέπονται από το ελληνικό δίκαιο και το δίκαιο της Ευρωπαϊκής Ένωσης. Για οποιαδήποτε διαφορά αρμόδια είναι τα δικαστήρια της Αθήνας.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">9. Αλλαγές στους Όρους</h2>
              <p className="text-slate-400 leading-relaxed">
                Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες Όρους Χρήσης. Οι αλλαγές θα ανακοινώνονται μέσω αυτής της σελίδας με ενημερωμένη ημερομηνία.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">10. Επικοινωνία</h2>
              <p className="text-slate-400 leading-relaxed">
                Για ερωτήσεις σχετικά με τους Όρους Χρήσης, επικοινωνήστε μαζί μας στο{" "}
                <a href="mailto:info@geomix.gr" className="text-blue-400 hover:text-blue-300">info@geomix.gr</a>.
              </p>
            </section>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <Link href="/" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition-colors text-slate-300">
              ← Επιστροφή στην αρχική
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
