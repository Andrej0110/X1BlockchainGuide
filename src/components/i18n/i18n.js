import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: ["app", "mainGuidSteps"],
    defaultNS: "app",
    backend: {
      loadPath: "/X1BlockchainGuide/i18n/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
