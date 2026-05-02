import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const k = "privacy";

  return (
    <>
      <Head>
        <title>{t(`${k}.title`)} — GeoMix</title>
        <meta name="description" content={t(`${k}.s1_body`).slice(0, 155)} />
        <meta property="og:title" content={`${t(`${k}.title`)} — GeoMix`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("common.og_locale")} />
        <link rel="canonical" href="https://geomix.gr/privacy-policy" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-100">
            {t(`${k}.title`)}
          </h1>
          <p className="text-slate-500 text-sm mb-12">
            {t(`${k}.last_updated`)}
          </p>

          <div className="prose prose-invert prose-slate max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s1_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t(`${k}.s1_body`)}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s2_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                {t(`${k}.s2_intro`)}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span>{t(`${k}.s2_item1`)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span>{t(`${k}.s2_item2`)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span>{t(`${k}.s2_item3`)}</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s3_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                {t(`${k}.s3_intro`)}
              </p>
              {/* <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <h3 className="text-slate-300 font-semibold mb-2">{t(`${k}.s3_ga_title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`${k}.s3_ga_body`)}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <h3 className="text-slate-300 font-semibold mb-2">{t(`${k}.s3_adsense_title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t(`${k}.s3_adsense_body`)}{" "}
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {t(`${k}.s3_adsense_link`)}
                    </a>.
                  </p>
                </div>
              </div> */}
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s4_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t(`${k}.s4_body`)}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s5_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                {t(`${k}.s5_intro`)}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{t(`${k}.s5_access`)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{t(`${k}.s5_rectification`)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{t(`${k}.s5_erasure`)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{t(`${k}.s5_objection`)}</span>
                </li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                {t(`${k}.s5_contact`)}{" "}
                <a
                  href="mailto:privacy@geomix.gr"
                  className="text-blue-400 hover:underline"
                >
                  privacy@geomix.gr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s6_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t(`${k}.s6_body`)}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s7_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t(`${k}.s7_body`)}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {t(`${k}.s8_title`)}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t(`${k}.s8_body`)}{" "}
                <a
                  href="mailto:privacy@geomix.gr"
                  className="text-blue-400 hover:underline"
                >
                  privacy@geomix.gr
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {t("common.back_home")}
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
