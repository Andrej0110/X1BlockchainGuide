import { useTranslation, Trans } from "react-i18next";
import "./X1GuidSteps.css";

const X1GuidStep_2 = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation("x1GuidSteps");

  const handleButtonClickMain = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("main");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const mainSection = document.getElementById("main-content");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="ml-4" id="faq"> {/* Anker für diesen Abschnitt */}
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
          <span className="ml-2">
            <Trans
              i18nKey="x1GuidSteps:faq.p03.answer"
              components={{
                telegramLink: (
                  <a
                    href="#main" // Verweist auf den Main Guide Abschnitt
                    onClick={handleButtonClickMain}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Main Guide
                  </a>
                ),
              }}
            />
          </span>
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