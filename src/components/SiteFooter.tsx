import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-slate-800 mt-8">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <span>© {new Date().getFullYear()} GeoMix · {t("footer.tagline")}</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
            {t("footer.privacy")}
          </Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
