import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

const CLAIMS = [
  { country: "Νορβηγία", country_en: "Norway", sector: "Γη της Βασίλισσας Μωδ", sector_en: "Queen Maud Land", range: "20°W – 45°E" },
  { country: "Αυστραλία", country_en: "Australia", sector: "Αυστραλιανή Ανταρκτική Επικράτεια", sector_en: "Australian Antarctic Territory", range: "45°E – 136°E / 142°E – 160°E" },
  { country: "Γαλλία", country_en: "France", sector: "Γη Αντελί", sector_en: "Adélie Land", range: "136°E – 142°E" },
  { country: "Νέα Ζηλανδία", country_en: "New Zealand", sector: "Ανταρκτική Εξάρτηση Ρος", sector_en: "Ross Dependency", range: "160°E – 150°W" },
  { country: "Χιλή", country_en: "Chile", sector: "Χιλιανή Ανταρκτική Επικράτεια", sector_en: "Chilean Antarctic Territory", range: "53°W – 90°W" },
  { country: "Αργεντινή", country_en: "Argentina", sector: "Αργεντινή Ανταρκτική", sector_en: "Argentine Antarctica", range: "25°W – 74°W" },
  { country: "Βρετανία", country_en: "United Kingdom", sector: "Βρετανική Ανταρκτική Επικράτεια", sector_en: "British Antarctic Territory", range: "20°W – 80°W" },
];

const STATIONS = [
  { name: "McMurdo Station", country: "ΗΠΑ", country_en: "USA", capacity: "~1,000 (summer)" },
  { name: "Amundsen–Scott", country: "ΗΠΑ", country_en: "USA", capacity: "~150 (South Pole)" },
  { name: "Vostok Station", country: "Ρωσία", country_en: "Russia", capacity: "~25" },
  { name: "Concordia Station", country: "Γαλλία / Ιταλία", country_en: "France / Italy", capacity: "~60" },
  { name: "Halley Research Station", country: "Βρετανία", country_en: "UK", capacity: "~70" },
  { name: "Neumayer Station III", country: "Γερμανία", country_en: "Germany", capacity: "~50" },
  { name: "Esperanza Base", country: "Αργεντινή", country_en: "Argentina", capacity: "~55 (permanent)" },
];

const RECORDS = [
  { label_el: "Χαμηλότερη θερμοκρασία που καταγράφηκε", label_en: "Lowest recorded temperature", value: "−89.2°C (Vostok, 1983)" },
  { label_el: "Μέση θερμοκρασία εσωτερικού χειμώνα", label_en: "Average interior winter temperature", value: "approx. −60°C" },
  { label_el: "Πάχος παγετώνα (μέγιστο)", label_en: "Ice sheet thickness (max)", value: "~4,800 m" },
  { label_el: "Έκταση", label_en: "Area", value: "14 million km² (~1.4× Europe)" },
  { label_el: "Μέσο υψόμετρο", label_en: "Mean elevation", value: "~2,300 m — highest continent on average" },
  { label_el: "Γλυκό νερό", label_en: "Fresh water", value: "~70% of world's fresh water reserves" },
  { label_el: "Ταχύτητα ανέμου (ριπή)", label_en: "Wind speed (gust)", value: "327 km/h (Commonwealth Bay)" },
];

export default function LearnAntarcticaPage() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const k = "pages.antarctica";

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
        <link rel="canonical" href="https://geomix.gr/learn/antarctica" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/learn" className="hover:text-slate-300 transition-colors">
              {t("learn.title")}
            </Link>
            <span>›</span>
            <span className="text-slate-400">{t("learn.articles.antarctica.title")}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🧊</span>
            <h1 className="text-4xl font-extrabold text-slate-100">{t("learn.articles.antarctica.title")}</h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-12">{t(`${k}.intro`)}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.records_title`)}</h2>
            <div className="grid grid-cols-1 gap-2">
              {RECORDS.map((r) => (
                <div
                  key={r.label_en}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 flex items-start justify-between gap-4"
                >
                  <span className="text-slate-400 text-sm">{isEn ? r.label_en : r.label_el}</span>
                  <span className="text-slate-200 text-sm font-semibold shrink-0">{r.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.treaty_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t(`${k}.treaty_intro`)}</p>
            <ul className="space-y-2">
              {(t(`${k}.treaty_points`, { returnObjects: true }) as string[]).map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.claims_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{t(`${k}.claims_subtitle`)}</p>
            <div className="grid grid-cols-1 gap-2">
              {CLAIMS.map((c) => (
                <div
                  key={c.country_en}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-slate-200 text-sm font-medium">
                      {isEn ? c.country_en : c.country}
                    </span>
                    <span className="text-slate-500 text-xs ml-2">
                      {isEn ? c.sector_en : c.sector}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs shrink-0">{c.range}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t(`${k}.stations_title`)}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{t(`${k}.stations_subtitle`)}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STATIONS.map((s) => (
                <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5">
                  <div className="text-slate-200 text-sm font-medium">{s.name}</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-slate-500 text-xs">{isEn ? s.country_en : s.country}</span>
                    <span className="text-slate-600 text-xs">{s.capacity}</span>
                  </div>
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
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
