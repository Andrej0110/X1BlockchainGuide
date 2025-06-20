import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";

const RentServerGuidStep_5 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step5.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step5.p01")}</p>
      </div>
    </div>
  );
};

export default RentServerGuidStep_5;
