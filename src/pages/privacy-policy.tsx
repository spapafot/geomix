import Head from "next/head";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Πολιτική Απορρήτου — GeoMix</title>
        <meta name="description" content="Η πολιτική απορρήτου του GeoMix. Πώς χειριζόμαστε τα δεδομένα σας και τα δικαιώματά σας βάσει GDPR." />
        <meta property="og:title" content="Πολιτική Απορρήτου — GeoMix" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/privacy-policy" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">Πολιτική Απορρήτου</h1>
          <p className="text-slate-500 text-sm mb-12">Τελευταία ενημέρωση: Απρίλιος 2026</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-10">

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">1. Εισαγωγή</h2>
              <p className="text-slate-400 leading-relaxed">
                Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το GeoMix (<strong className="text-slate-300">geomix.gr</strong>) συλλέγει, χρησιμοποιεί και προστατεύει τις πληροφορίες σας κατά τη χρήση της πλατφόρμας μας. Σεβόμαστε την ιδιωτικότητά σας και δεσμευόμαστε να την προστατεύουμε σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">2. Δεδομένα που συλλέγουμε</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Το GeoMix <strong className="text-slate-300">δεν απαιτεί εγγραφή</strong> και δεν συλλέγει προσωπικά δεδομένα για τη χρήση των κουίζ. Συγκεκριμένα:
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5 shrink-0">✓</span><span>Δεν απαιτούμε λογαριασμό ή email για τη χρήση της υπηρεσίας.</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5 shrink-0">✓</span><span>Δεν αποθηκεύουμε αποτελέσματα κουίζ ή ιστορικό χρήσης σε server.</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5 shrink-0">✓</span><span>Δεν πουλάμε ούτε μοιραζόμαστε προσωπικά δεδομένα με τρίτους.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">3. Cookies και τεχνολογίες παρακολούθησης</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Χρησιμοποιούμε τις ακόλουθες τεχνολογίες:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-300 mb-1">Google Analytics</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Χρησιμοποιούμε το Google Analytics για να κατανοούμε πώς οι επισκέπτες χρησιμοποιούν την πλατφόρμα (π.χ. αριθμός επισκεπτών, δημοφιλέστερα κουίζ). Τα δεδομένα είναι ανώνυμα και συγκεντρωτικά.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-300 mb-1">Google AdSense</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Ενδέχεται να εμφανίζουμε διαφημίσεις μέσω Google AdSense. Η Google ενδέχεται να χρησιμοποιεί cookies για την εξατομίκευση διαφημίσεων βάσει των προτιμήσεών σας. Μπορείτε να διαχειριστείτε αυτές τις προτιμήσεις μέσω των <a href="https://adssettings.google.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">ρυθμίσεων διαφημίσεων της Google</a>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">4. Δεδομένα επικοινωνίας</h2>
              <p className="text-slate-400 leading-relaxed">
                Εάν μας αποστείλετε email μέσω της σελίδας επικοινωνίας, θα χρησιμοποιήσουμε τη διεύθυνση email σας αποκλειστικά για να απαντήσουμε στο αίτημά σας. Δεν χρησιμοποιούμε αυτές τις πληροφορίες για marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">5. Δικαιώματά σας (GDPR)</h2>
              <p className="text-slate-400 leading-relaxed mb-3">Βάσει του GDPR, έχετε τα ακόλουθα δικαιώματα:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5 shrink-0">→</span><span><strong className="text-slate-300">Πρόσβαση:</strong> Δικαίωμα να γνωρίζετε ποια δεδομένα έχουμε για εσάς.</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5 shrink-0">→</span><span><strong className="text-slate-300">Διόρθωση:</strong> Δικαίωμα διόρθωσης ανακριβών δεδομένων.</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5 shrink-0">→</span><span><strong className="text-slate-300">Διαγραφή:</strong> Δικαίωμα διαγραφής των δεδομένων σας.</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5 shrink-0">→</span><span><strong className="text-slate-300">Εναντίωση:</strong> Δικαίωμα εναντίωσης στη χρήση των δεδομένων σας.</span></li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                Για να ασκήσετε οποιοδήποτε από αυτά τα δικαιώματα, επικοινωνήστε μαζί μας στο <a href="mailto:info@geomix.gr" className="text-blue-400 hover:text-blue-300">info@geomix.gr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">6. Ασφάλεια</h2>
              <p className="text-slate-400 leading-relaxed">
                Χρησιμοποιούμε HTTPS για την κρυπτογράφηση όλης της επικοινωνίας μεταξύ του προγράμματος περιήγησής σας και των server μας. Δεν αποθηκεύουμε ευαίσθητες πληροφορίες.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">7. Αλλαγές στην Πολιτική</h2>
              <p className="text-slate-400 leading-relaxed">
                Ενδέχεται να ενημερώνουμε την παρούσα πολιτική κατά καιρούς. Κάθε αλλαγή θα δημοσιεύεται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">8. Επικοινωνία</h2>
              <p className="text-slate-400 leading-relaxed">
                Για ερωτήσεις σχετικά με την πολιτική απορρήτου, επικοινωνήστε μαζί μας στο{" "}
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
