import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer02 from "./Pictures/InterServer02.webp";

const RentServerGuidStep_2 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step2.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step2.p01")}</p>
        <img src={InterServer02} className="w-[900px] img mb-2" />
      </div>
    </div>
  );
};

export default RentServerGuidStep_2;
