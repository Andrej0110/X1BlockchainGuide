import { useTranslation } from "react-i18next";
import "./X1GuidSteps.css";
import X1Validator01 from "./Pictures/X1_Validator.webp";

const X1GuidStep_1 = () => {
  const { t } = useTranslation("x1GuidSteps");

  return (
    <div className="ml-4 mr-4">
      <p className="mt-4 mb-2 text-lg leading-relaxed">{t("introduction")}</p>
      <h2 className="mt-6 mb-4 text-2xl font-bold">{t("advantages.title")}</h2>
      <ul className="ml-6 space-y-6">
        {" "}
        {/* Erhöhte space-y-6 für mehr Abstand zwischen Vorteilen */}
        <li>
          <div>
            <span className="font-bold block">{t("advantages.p01.title")}</span>
            <span className="block mt-1 text-base leading-relaxed">
              {t("advantages.p01.answer")}
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="font-bold block">{t("advantages.p02.title")}</span>
            <span className="block mt-1 text-base leading-relaxed">
              {t("advantages.p02.answer")}
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="font-bold block">{t("advantages.p03.title")}</span>
            <span className="block mt-1 text-base leading-relaxed">
              {t("advantages.p03.answer")}
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="font-bold block">{t("advantages.p04.title")}</span>
            <span className="block mt-1 text-base leading-relaxed">
              {t("advantages.p04.answer")}
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="font-bold block">{t("advantages.p05.title")}</span>
            <span className="block mt-1 text-base leading-relaxed">
              {t("advantages.p05.answer")}
            </span>
          </div>
        </li>
      </ul>
      <img src={X1Validator01} alt={`Validator 2`} className="max-w-full w-full md:w-[1400px] img" />
    </div>
  );
};

export default X1GuidStep_1;

{
  /*
 <h2 className="mt-6 mb-4 text-2xl font-bold">{t("advantages.title")}</h2>
  <h2 className="mt-6 mb-4 text-2xl font-bold">{t("faq.title")}</h2>


 Häufige Fragen (FAQ)
• Was ist ein X1 Validator? Ein Validator sichert das Netzwerk und verdient Belohnungen durch Votes und Block-Produktion.
• Wie hoch sind die Kosten? Nur Hardware-Kosten, Voting ist kostenfrei – ein Vorteil gegenüber Solana.
• Wie starte ich? Mit drei Schritten bist du bereit:
  1. Miete dir einen Server.
  2. Sichere den Zugang.
  3. Lies diesen Guide und starte!
• Warum ist dieser Guide besonders? Er nutzt die X1 Console von BlackBeard, mit der die meisten Installationen automatisch erfolgen – Zeit und Aufwand gespart!

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
