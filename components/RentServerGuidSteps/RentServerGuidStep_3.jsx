import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer03 from "./Pictures/InterServer03.webp";
import InterServer03_01 from "./Pictures/InterServer03_01.jpg";
import InterServer04 from "./Pictures/InterServer04.webp";
import InterServer05 from "./Pictures/InterServer05.webp";

const RentServerGuidStep_3 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step3.title")} />

      <div className="image-container ml-4 mr-4">
        <p className="font-semibold">{t("step3.headline01")}</p>
        <p>{t("step3.p01")}</p>
        <img src={InterServer03} alt={`Test1`} className="w-[700px] img mb-4" />

        <p className="font-semibold">{t("step3.headline02")}</p>
        <p>{t("step3.p02")}</p>
        <img
          src={InterServer03_01}
          alt={`Test1`}
          className="w-[700px] img mb-4"
        />

        <p className="font-semibold">{t("step3.headline03")}</p>
        <p>{t("step3.p03")}</p>

        <p className="font-semibold mt-4">{t("step3.headline04")}</p>
        <p>{t("step3.p04")}</p>
        <img src={InterServer04} alt={`Test1`} className="w-[700px] img" />
        <img src={InterServer05} alt={`Test2`} className="w-[700px] img" />
      </div>
    </div>
  );
};

export default RentServerGuidStep_3;
