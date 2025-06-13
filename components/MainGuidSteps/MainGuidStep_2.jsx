import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import PuttyAddUser01 from "./Pictures/Add_User/PuttyAddUser_01.webp";

const MainGuidStep_2 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps");
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step2.title")}
        description={t("step2.description")}
        buttonText={t("step2.buttonText")}
        image={PuttyAddUser01}
        imageClassName="mt-4 w-[600px] h-auto rounded-md shadow-sm"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabValue="wsl"
      />
    </div>
  );
};

export default MainGuidStep_2;
