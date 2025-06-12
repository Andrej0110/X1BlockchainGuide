import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";

const MainGuidStep_2 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps");
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step2.title")}
        description={t("step2.description")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabValue="wsl"
      />
    </div>
  );
};

export default MainGuidStep_2;
