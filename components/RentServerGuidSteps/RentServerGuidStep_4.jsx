import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer06 from "./Pictures/InterServer06.webp";
import InterServer06_01 from "./Pictures/InterServer06_01.jpg";
import InterServer06_02 from "./Pictures/InterServer06_02.jpg";

const RentServerGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step4.title")}
        description={t("step4.description")}
      />
      <div className="image-container ml-4 mr-4">
        <p>{t("step4.p01")}</p>
        <img src={InterServer06_01} alt={`Test1`} className="w-[400px] img" />
        <p>{t("step4.p02")}</p>
        <img src={InterServer06_02} alt={`Test1`} className="w-[400px] img" />
      </div>
    </div>
  );
};

export default RentServerGuidStep_4;
