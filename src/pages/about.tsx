import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();
  const k = "about";

  return (
    <>
      <Head>
        <title>{t(`${k}.title`)} — GeoMix</title>
        <meta name="description" content={t(`${k}.intro`)} />
        <meta property="og:title" content={`${t(`${k}.title`)} — GeoMix`} />
        <meta property="og:description" content={t(`${k}.intro`)} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("common.og_locale")} />
        <link rel="canonical" href="https://geomix.gr/about" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">{t(`${k}.title`)}</h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">{t(`${k}.intro`)}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.what_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.what_p1`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.what_p2`)}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.who_title`)}</h2>
            <ul className="space-y-3">
              {["who_item1", "who_item2", "who_item3", "who_item4"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                  <span>{t(`${k}.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">{t(`${k}.how_title`)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(["1", "2", "3"] as const).map((n) => (
                <div key={n} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-blue-500 mb-2">{n}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{t(`${k}.how_step${n}_title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`${k}.how_step${n}_desc`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.why_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.why_p1`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.why_p2`)}</p>
          </section>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-sm transition-colors">
              {t(`${k}.cta_quiz`)}
            </Link>
            <Link href="/contact" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-sm transition-colors">
              {t(`${k}.cta_contact`)}
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
