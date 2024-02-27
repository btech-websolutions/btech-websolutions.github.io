import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../locales/en.json";
import ptTranslations from "../locales/pt.json";
import esTranslations from "../locales/es.json";
import cnTranslations from "../locales/cn.json";
import rsTranslations from "../locales/rs.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enTranslations },
    pt: { ...ptTranslations },
    es: { ...esTranslations },
    cn: { ...cnTranslations },
    rs: { ...rsTranslations },
  },
  lng: "pt",
});
