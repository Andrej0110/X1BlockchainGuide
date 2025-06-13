import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import ValidatorHardware01 from "./Pictures/Step_1/ValidatorHardware01jpg.webp";

const MainGuidStep_1 = ({ id, activeTab, setActiveTab }) => {
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
        imageClassName=" w-[400px] img"
      />
    </div>
  );
};

export default MainGuidStep_1;
