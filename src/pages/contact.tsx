import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

export default function ContactPage() {
  const { t } = useTranslation();
  const k = "contact";

  const CONTACTS = [
    { icon: "📧", titleKey: "general_title", descKey: "general_desc", email: "info@geomix.gr" },
    { icon: "🐛", titleKey: "support_title", descKey: "support_desc", email: "support@geomix.gr" },
    { icon: "✉️", titleKey: "collab_title", descKey: "collab_desc", email: "contact@geomix.gr" },
  ];

  const FAQS = [
    { q: t(`${k}.faq_q1`), a: t(`${k}.faq_a1`) },
    { q: t(`${k}.faq_q2`), a: t(`${k}.faq_a2`) },
    { q: t(`${k}.faq_q3`), a: t(`${k}.faq_a3`) },
    { q: t(`${k}.faq_q4`), a: t(`${k}.faq_a4`) },
  ];

  return (
    <>
      <Head>
        <title>{t(`${k}.title`)} — GeoMix</title>
        <meta name="description" content={t(`${k}.intro`)} />
        <meta property="og:title" content={`${t(`${k}.title`)} — GeoMix`} />
        <meta property="og:description" content={t(`${k}.intro`)} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("common.og_locale")} />
        <link rel="canonical" href="https://geomix.gr/contact" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">{t(`${k}.title`)}</h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">{t(`${k}.intro`)}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {CONTACTS.map(({ icon, titleKey, descKey, email }) => (
              <div key={email} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h2 className="font-bold text-slate-200 mb-2">{t(`${k}.${titleKey}`)}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{t(`${k}.${descKey}`)}</p>
                <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  {email}
                </a>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.faq_title`)}</h2>
            <div className="space-y-4">
              {FAQS.map((item) => (
                <div key={item.q} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-200 mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-slate-800 pt-8">
            <Link href="/" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-colors">
              {t(`${k}.back`)}
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
