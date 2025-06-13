import { useTranslation } from "react-i18next";
import "./X1GuidSteps_1.css";

const X1GuidStep_2 = ({ language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("x1GuidSteps");

  return (
    <div className="ml-4">
      <h2 className="mt-6 mb-4 text-2xl font-bold">{t("faq.title")}</h2>
      <ul className="ml-6 space-y-2">
        <li>
          <span className="font-bold">{t("faq.p01.question")}</span>
          <span className="ml-2">{t("faq.p01.answer")}</span>
        </li>
        <li>
          <span className="font-bold">{t("faq.p02.question")}</span>
          <span className="ml-2">{t("faq.p02.answer")}</span>
        </li>
        <li>
          <span className="font-bold">{t("faq.p03.question")}</span>
          <span className="ml-2">{t("faq.p03.answer")}</span>
          <ol className="ml-6 mt-1 space-y-1">
            <li>{t("faq.p03.steps.0")}</li>
            <li>{t("faq.p03.steps.1")}</li>
            <li>{t("faq.p03.steps.2")}</li>
          </ol>
        </li>
        <li>
          <span className="font-bold">{t("faq.p04.question")}</span>
          <span className="ml-2">{t("faq.p04.answer")}</span>
        </li>
      </ul>
    </div>
  );
};

export default X1GuidStep_2;

{
  /*

 Quellen
• [<a href="https://docs.x1.xyz/">X1 Offizielle Dokumentation</a>]
• [<a href="https://t.me/x1validators">X1 Validators Telegram-Gruppe</a>]
• [<a href="https://x.com/x1official">X-Posts von X1</a>] (verifiziert, Stand 13. Juni 2025)

 Autor
• Verfasst von [Dein Name], Blockchain-Enthusiast mit [X Jahren] Erfahrung. Kontakt: [E-Mail/LinkedIn].

 Werde Teil des Netzwerks!
 Bild einfügen

Jetzt loslegen!
Starte noch heute mit dem Guide und sichere dir deine Belohnungen!



*/
}
