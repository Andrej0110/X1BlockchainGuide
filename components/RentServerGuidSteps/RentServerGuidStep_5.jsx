import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";

const RentServerGuidStep_5 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step5.title")}
        description={t("step5.description")}
      />
    </div>
  );
};

export default RentServerGuidStep_5;
