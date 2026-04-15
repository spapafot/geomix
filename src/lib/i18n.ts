import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import el from "../../public/locales/el.json";
import en from "../../public/locales/en.json";

const STORAGE_KEY = "geomix_lang";

export function getStoredLang(): string {
  if (typeof window === "undefined") return "el";
  return localStorage.getItem(STORAGE_KEY) || "el";
}

export function storeLang(lang: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        el: { translation: el },
        en: { translation: en },
      },
      lng: "el",
      fallbackLng: "el",
      interpolation: { escapeValue: false },
    });
}

export default i18n;
