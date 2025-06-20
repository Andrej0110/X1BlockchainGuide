import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer07 from "./Pictures/InterServer07.webp";

const RentServerGuidStep_6 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step6.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step6.p01")}</p>
        <img src={InterServer07} className="w-[900px] img mb-2" />
      </div>
    </div>
  );
};

export default RentServerGuidStep_6;
