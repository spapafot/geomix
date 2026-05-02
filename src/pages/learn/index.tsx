import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/lib/i18n";

const ARTICLES = [
  { slug: "greece",        href: "/learn/greece",        flag: "🇬🇷", color: "from-blue-600/20 to-blue-800/10",    border: "border-blue-500/30 hover:border-blue-400/60",    quiz: "/quiz" },
  { slug: "europe",        href: "/learn/europe",        flag: "🌍", color: "from-emerald-600/20 to-emerald-800/10", border: "border-emerald-500/30 hover:border-emerald-400/60", quiz: "/quiz/europe" },
  { slug: "asia",          href: "/learn/asia",          flag: "🌏", color: "from-sky-600/20 to-sky-800/10",      border: "border-sky-500/30 hover:border-sky-400/60",      quiz: "/quiz/asia" },
  { slug: "africa",        href: "/learn/africa",        flag: "🌍", color: "from-amber-600/20 to-amber-800/10",  border: "border-amber-500/30 hover:border-amber-400/60",  quiz: "/quiz/africa" },
  { slug: "north-america", href: "/learn/north-america", flag: "🌎", color: "from-cyan-600/20 to-cyan-800/10",    border: "border-cyan-500/30 hover:border-cyan-400/60",    quiz: "/quiz/north-america" },
  { slug: "south-america", href: "/learn/south-america", flag: "🌎", color: "from-lime-600/20 to-lime-800/10",    border: "border-lime-500/30 hover:border-lime-400/60",    quiz: "/quiz/south-america" },
  { slug: "oceania",       href: "/learn/oceania",       flag: "🌊", color: "from-teal-600/20 to-teal-800/10",   border: "border-teal-500/30 hover:border-teal-400/60",   quiz: "/quiz" },
  { slug: "antarctica",    href: "/learn/antarctica",    flag: "🧊", color: "from-slate-600/20 to-slate-800/10", border: "border-slate-500/30 hover:border-slate-400/60", quiz: "/learn" },
];

export default function LearnIndexPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const ogLocale = i18n.language === "en" ? "en_US" : "el_GR";

  return (
    <>
      <Head>
        <title>{t("learn.title")} — {t("nav.learn")} | GeoMix</title>
        <meta name="description" content={t("learn.subtitle")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${t("learn.title")} | GeoMix`} />
        <meta property="og:description" content={t("learn.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={ogLocale} />
        <link rel="canonical" href="https://geomix.gr/learn" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        <SiteNav />

        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold mb-4 text-slate-100">{t("learn.title")}</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{t("learn.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ARTICLES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`group relative rounded-2xl border bg-gradient-to-br p-5 transition-all hover:-translate-y-1 ${a.color} ${a.border}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{a.flag}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-slate-100 text-base mb-1">
                      {t(`learn.articles.${a.slug}.title`)}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {t(`learn.articles.${a.slug}.desc`)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    {t("learn.read")}
                  </span>
                  <span
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(a.quiz); }}
                    className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
                  >
                    {t("learn.go_to_quiz")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
