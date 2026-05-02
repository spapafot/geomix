import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

interface Country {
  id: string;
  name: string;
  name_en: string;
  capital: string;
  capital_en: string;
}

interface Props {
  countries: Country[];
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "public/data/north-america.geojson");
  const geojson = JSON.parse(fs.readFileSync(file, "utf8"));
  const countries: Country[] = geojson.features
    .map((f: { properties: Country }) => ({
      id: f.properties.id,
      name: f.properties.name,
      name_en: f.properties.name_en ?? f.properties.id,
      capital: f.properties.capital ?? "",
      capital_en: f.properties.capital_en ?? f.properties.capital ?? "",
    }))
    .sort((a: Country, b: Country) => a.name.localeCompare(b.name, "el"));
  return { props: { countries } };
}

export default function LearnNorthAmericaPage({ countries }: Props) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const k = "pages.north_america";

  return (
    <>
      <Head>
        <title>{t(`${k}.head_title`)}</title>
        <meta name="description" content={t(`${k}.head_desc`)} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t(`${k}.og_title`)} />
        <meta property="og:description" content={t(`${k}.og_desc`)} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={t("common.og_locale")} />
        <link rel="canonical" href="https://geomix.gr/learn/north-america" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">
              {t("learn.title")}
            </Link>
            <span>›</span>
            <span className="text-slate-400">{t("learn.articles.north_america.title")}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌎</span>
            <h1 className="text-4xl font-extrabold text-slate-100">{t("learn.articles.north_america.title")}</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">{t(`${k}.intro`)}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t("learn.geography_intro")}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p1`)}</p>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p2`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.geo_p3`)}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">{t("learn.countries_capitals")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {countries.map((c) => (
                <div
                  key={c.id}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between"
                >
                  <span className="text-slate-200 text-sm font-medium">
                    {isEn ? c.name_en : c.name}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {isEn ? c.capital_en : c.capital}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t("learn.interesting_facts")}</h2>
            <ul className="space-y-3">
              {(t(`${k}.facts`, { returnObjects: true }) as string[]).map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-cyan-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">{t("learn.try_quiz")}</h3>
            <p className="text-slate-400 text-sm mb-4">{t(`${k}.quiz_subtitle`)}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quiz/north-america" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold transition-colors">
                🗺️ {t("learn.articles.north_america.title")}
              </Link>
              <Link href="/quiz/north-america-capitals" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                🏛️ {t("common.capitals")}
              </Link>
              <Link href="/quiz/north-america-flags" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                🚩 {t("common.flags")}
              </Link>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
