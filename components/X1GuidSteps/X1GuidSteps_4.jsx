import { useTranslation, Trans} from "react-i18next";
import "./X1GuidSteps.css";

const X1GuidStep_4 = () => {
  const { t } = useTranslation("x1GuidSteps");

  return (
    <div className="ml-4">
      <h2 className="mt-6 mb-4 text-2xl font-bold">{t("author.title")}</h2>
      <p className="mt-4 mb-2 text-lg leading-relaxed">
          <Trans
            i18nKey="x1GuidSteps:author.p01"
            components={{
              telegramLink: (
                <a
                  href="t.me/X1BlockchainGuide"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>


    </div>
  );
};

export default X1GuidStep_4;

{
  /*

t.me/X1BlockchainGuide

 Autor
• Verfasst von [Dein Name], Blockchain-Enthusiast mit [X Jahren] Erfahrung. Kontakt: [E-Mail/LinkedIn].

 Werde Teil des Netzwerks!
 Bild einfügen

Jetzt loslegen!
Starte noch heute mit dem Guide und sichere dir deine Belohnungen!



*/
}
