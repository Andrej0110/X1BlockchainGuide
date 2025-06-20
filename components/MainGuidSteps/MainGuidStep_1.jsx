import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import ValidatorHardware01 from "./Pictures/Step_1/ValidatorHardware01jpg.webp";

const MainGuidStep_1 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps");

  const handleButtonClickRent = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("rent");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const rentSection = document.getElementById("rent");
      if (rentSection) {
        rentSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div id={id} className="">
      <h2 className="text-2xl font-semibold ml-4">{t("introduction")}</h2>
      <p className="ml-4">{t("p01")}</p>
      <GuidStepTemplate
        id={id}
        title={t("step1.title")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabValue="rent"
      />

      <div className="ml-4 mr-4" id="step1">
        <p>
          <Trans
            i18nKey="mainGuidSteps:step1.p01"
            components={{
              telegramLink: (
                <a
                  href="#rent" // Verweist auf den wsl Guide Abschnitt
                  onClick={handleButtonClickRent}
                  className="link"
                ></a>
              ),
            }}
          />
        </p>

        <img src={ValidatorHardware01} className="w-[400px] img" />
      </div>
    </div>
  );
};

export default MainGuidStep_1;
