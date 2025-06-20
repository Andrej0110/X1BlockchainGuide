import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer08 from "./Pictures/InterServer08.webp";

const RentServerGuidStep_7 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  const handleButtonClickWsl = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("wsl");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const wslSection = document.getElementById("wsl");
      if (wslSection) {
        wslSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  const handleButtonClickMain = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("main");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const mainSection = document.getElementById("main");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step7.title")}
        description={t("step7.description")}
        image={InterServer08}
      />

      <p className="ml-4">
        <Trans
          i18nKey="rentServerGuidSteps:step7:p01"
          components={{
            telegramLink: (
              <a href="#wsl" onClick={handleButtonClickWsl} className="link" />
            ),
          }}
        />
      </p>

      <p className="ml-4">
        <Trans
          i18nKey="rentServerGuidSteps:step7:p02"
          components={{
            telegramLink: (
              <a
                href="#main"
                onClick={handleButtonClickMain}
                className="link"
              />
            ),
          }}
        />
      </p>
    </div>
  );
};

export default RentServerGuidStep_7;
