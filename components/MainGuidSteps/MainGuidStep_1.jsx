import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import ValidatorHardware01 from "./Pictures/Step_1/ValidatorHardware01jpg.jpg";

const MainGuidStep_1 = ({ id, language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps");
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step1.title")}
        description={t("step1.description")}
        buttonText={t("step1.buttonText")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabValue="rent"
        image={ValidatorHardware01}
        imageClassName="mt-4 w-[400px] h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_1.getTitle = (language) => {
  const { t } = useTranslation("mainGuidSteps"); // Dynamischer Zugriff auf Übersetzungen
};

export default MainGuidStep_1;
