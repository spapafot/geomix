import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@/lib/i18n";
import i18n, { getStoredLang } from "@/lib/i18n";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lang = getStoredLang();
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return <Component {...pageProps} />;
}
