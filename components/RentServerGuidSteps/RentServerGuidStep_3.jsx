import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer03 from "./Pictures/InterServer03.webp";
import InterServer04 from "./Pictures/InterServer04.webp";
import InterServer05 from "./Pictures/InterServer05.webp";

const RentServerGuidStep_3 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step3.title")}
        description={t("step3.description")}
        image={InterServer03}
        imageClassName="w-[700px] img"
      />

      <div className="image-container, ml-4">
        <p>{t("step3.p01")}</p>
        <img src={InterServer04} alt={`Test1`} className="w-[700px] img" />
        <img src={InterServer05} alt={`Test2`} className="w-[700px] img" />
      </div>
    </div>
  );
};

export default RentServerGuidStep_3;
