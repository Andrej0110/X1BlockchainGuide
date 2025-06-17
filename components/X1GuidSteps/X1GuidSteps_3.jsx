import { useTranslation } from "react-i18next";
import "./X1GuidSteps.css";

const X1GuidStep_3 = () => {
  const { t } = useTranslation("x1GuidSteps");

  return (
    <div className="ml-4">
      <h2 className="mt-6 mb-4 text-2xl font-bold">{t("sources.title")}</h2>
      <ul className="ml-6 space-y-6">
  <li className="mt-1 text-base leading-relaxed">
    <a href="https://x1.xyz/" className="link" target="_blank" rel="noopener noreferrer">
      {t("sources.p01")}
    </a>
  </li>
  <li className="mt-1 text-base leading-relaxed">
    <a href="https://docs.x1.xyz/" className="link" target="_blank" rel="noopener noreferrer">
      {t("sources.p02")}
    </a>
  </li>
  <li className="mt-1 text-base leading-relaxed">
    <a href="https://t.me/+yT0VAcNPFqM3OGQ0" className="link" target="_blank" rel="noopener noreferrer">
      {t("sources.p03")}
    </a>
  </li>
  <li className="mt-1 text-base leading-relaxed">
    <a href="https://x.com/x1_chain" className="link" target="_blank" rel="noopener noreferrer">
      {t("sources.p04")}
    </a>
  </li>
  <li className="mt-1 text-base leading-relaxed">
    <a href="https://x.com/mrJackLevin" className="link" target="_blank" rel="noopener noreferrer">
      {t("sources.p05")}
    </a>
  </li>
</ul>
    </div>
  );
};

export default X1GuidStep_3;

{
  /*


 Autor
• Verfasst von [Dein Name], Blockchain-Enthusiast mit [X Jahren] Erfahrung. Kontakt: [E-Mail/LinkedIn].

 Werde Teil des Netzwerks!
 Bild einfügen

Jetzt loslegen!
Starte noch heute mit dem Guide und sichere dir deine Belohnungen!

Andrejⓧ1


*/
}
