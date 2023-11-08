import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranslationPL from "./TranslationPL.js";
import TranslationUA from "./TranslationUA.js";
import TranslationEN from "./TranslationEN.js";

const resources = {
  en: {
    translation: TranslationEN,
  },
  pl: {
    translation: TranslationPL,
  },
  ua: {
    translation: TranslationUA,
  },
};

i18n
  .use(initReactI18next)
  // При першому заході буде вибрана мова браузера
  .use(LanguageDetector)

  .init({
    resources,
    //   Якщо мова браузера відсутня буде вибрана:
    fallbackLng: "pl",

    detection: {
      order: [
        "path",
        "querystring",
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
