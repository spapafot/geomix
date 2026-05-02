import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

interface Region {
  id: string;
  name: string;
  name_en: string;
  capital: string;
}

interface Props {
  regions: Region[];
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "public/data/greece-regions.geojson");
  const geojson = JSON.parse(fs.readFileSync(file, "utf8"));
  const regions: Region[] = geojson.features
    .map((f: { properties: { id: string; name: string; name_en?: string; capital?: string } }) => ({
      id: f.properties.id,
      name: f.properties.name,
      name_en: f.properties.name_en ?? f.properties.id,
      capital: f.properties.capital ?? "",
    }))
    .sort((a: Region, b: Region) => a.name.localeCompare(b.name, "el"));
  return { props: { regions } };
}

export default function LearnGreecePage({ regions }: Props) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const k = "pages.greece";

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
        <link rel="canonical" href="https://geomix.gr/learn/greece" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">
              {t("learn.title")}
            </Link>
            <span>›</span>
            <span className="text-slate-400">{t("learn.articles.greece.title")}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🇬🇷</span>
            <h1 className="text-4xl font-extrabold text-slate-100">{t("learn.articles.greece.title")}</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">{t(`${k}.intro`)}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t("learn.geography_intro")}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p1`)}</p>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p2`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.geo_p3`)}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.regions_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{t(`${k}.regions_subtitle`)}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regions.map((r) => (
                <div
                  key={r.id}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-slate-200 text-sm font-medium">
                    {isEn ? r.name_en : r.name}
                  </span>
                  <span className="text-slate-500 text-xs">{r.capital}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.cities_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.cities_p1`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.cities_p2`)}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t("learn.interesting_facts")}</h2>
            <ul className="space-y-3">
              {(t(`${k}.facts`, { returnObjects: true }) as string[]).map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="font-bold text-slate-100 mb-2">{t("learn.try_quiz")}</h3>
            <p className="text-slate-400 text-sm mb-4">{t(`${k}.quiz_subtitle`)}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quiz" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-colors">
                🗺️ {t("learn.articles.greece.title")}
              </Link>
              <Link href="/quiz/nomoi" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                📍 {t("games.nomoi.title")}
              </Link>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
