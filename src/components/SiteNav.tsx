import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function SiteNav() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-100 hover:text-white transition-colors">
          <span className="text-lg">🌍</span>
          <span>GeoMix</span>
        </Link>
        <nav className="flex items-center gap-5 text-xs text-slate-400">
          <Link href="/" className={`hover:text-slate-200 transition-colors ${router.pathname === "/" ? "text-slate-200" : ""}`}>
            {t("nav.home")}
          </Link>
          <Link href="/learn" className={`hover:text-slate-200 transition-colors ${router.pathname.startsWith("/learn") ? "text-slate-200" : ""}`}>
            {t("nav.learn")}
          </Link>
          <Link href="/about" className={`hover:text-slate-200 transition-colors ${router.pathname === "/about" ? "text-slate-200" : ""}`}>
            {t("nav.about")}
          </Link>
          <Link href="/contact" className={`hidden sm:block hover:text-slate-200 transition-colors ${router.pathname === "/contact" ? "text-slate-200" : ""}`}>
            Επικοινωνία
          </Link>
        </nav>
      </div>
    </header>
  );
}
