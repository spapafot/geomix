import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

const COUNTRIES = [
  { name: "Αυστραλία", name_en: "Australia", capital: "Κανμπέρα", capital_en: "Canberra" },
  { name: "Νέα Ζηλανδία", name_en: "New Zealand", capital: "Ουέλινγκτον", capital_en: "Wellington" },
  { name: "Παπούα Νέα Γουινέα", name_en: "Papua New Guinea", capital: "Πορτ Μόρεσμπι", capital_en: "Port Moresby" },
  { name: "Φίτζι", name_en: "Fiji", capital: "Σούβα", capital_en: "Suva" },
  { name: "Νησιά Σολομώντα", name_en: "Solomon Islands", capital: "Χονιάρα", capital_en: "Honiara" },
  { name: "Βανουάτου", name_en: "Vanuatu", capital: "Πορτ Βίλα", capital_en: "Port Vila" },
  { name: "Σαμόα", name_en: "Samoa", capital: "Απία", capital_en: "Apia" },
  { name: "Κιριμπάτι", name_en: "Kiribati", capital: "Νότια Τάραουα", capital_en: "South Tarawa" },
  { name: "Τόνγκα", name_en: "Tonga", capital: "Νούκου'αλόφα", capital_en: "Nukuʻalofa" },
  { name: "Μικρονησία", name_en: "Micronesia", capital: "Παλικίρ", capital_en: "Palikir" },
  { name: "Παλάου", name_en: "Palau", capital: "Νγκερουλμούντ", capital_en: "Ngerulmud" },
  { name: "Νησιά Μάρσαλ", name_en: "Marshall Islands", capital: "Ματζούρο", capital_en: "Majuro" },
  { name: "Ναουρού", name_en: "Nauru", capital: "Γιάρεν", capital_en: "Yaren" },
  { name: "Νησιά Κουκ", name_en: "Cook Islands", capital: "Αβαρούα", capital_en: "Avarua" },
  { name: "Νιούε", name_en: "Niue", capital: "Αλόφι", capital_en: "Alofi" },
  { name: "Γαλλική Πολυνησία", name_en: "French Polynesia", capital: "Παπεέτε", capital_en: "Papeete" },
  { name: "Νέα Καληδονία", name_en: "New Caledonia", capital: "Νουμέα", capital_en: "Nouméa" },
  { name: "Γκουάμ", name_en: "Guam", capital: "Χαγκάτνια", capital_en: "Hagåtña" },
  { name: "Αμερικανική Σαμόα", name_en: "American Samoa", capital: "Πάγκο Πάγκο", capital_en: "Pago Pago" },
  { name: "Νήσοι Βόρειες Μαριάνες", name_en: "Northern Mariana Islands", capital: "Σαϊπάν", capital_en: "Saipan" },
  { name: "Ουάλις και Φουτούνα", name_en: "Wallis and Futuna", capital: "Ματά-Ουτού", capital_en: "Mata-Utu" },
];

export default function LearnOceaniaPage() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const k = "pages.oceania";

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
        <link rel="canonical" href="https://geomix.gr/learn/oceania" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">
              {t("learn.title")}
            </Link>
            <span>›</span>
            <span className="text-slate-400">{t("learn.articles.oceania.title")}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌊</span>
            <h1 className="text-4xl font-extrabold text-slate-100">{t("learn.articles.oceania.title")}</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">{t(`${k}.intro`)}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t("learn.geography_intro")}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p1`)}</p>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p2`)}</p>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.geo_p3`)}</p>
            <p className="text-slate-400 leading-relaxed">{t(`${k}.geo_p4`)}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">{t("learn.countries_capitals")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <div
                  key={c.name_en}
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
                  <span className="text-teal-400 shrink-0 mt-0.5">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
