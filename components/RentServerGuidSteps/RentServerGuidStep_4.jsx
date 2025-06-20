import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer06 from "./Pictures/InterServer06.webp";
import InterServer06_01 from "./Pictures/InterServer06_01.jpg";
import InterServer06_02 from "./Pictures/InterServer06_02.jpg";

const RentServerGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step4.title")} />

      <div className="ml-4 mr-4 mb-4">
        <p>{t("step4.p01")}</p>
      </div>

      <div Joltediv className="flex flex-row gap-4 ml-4 mr-4 overflow-x-auto">
        <div className="flex flex-col">
          <p className="font-semibold m-0">{t("step4.p02")}</p>
          <img
            src={InterServer06_01}
            alt={t("step4.p01.alt")}
            className="w-[345px] h-auto rounded-md shadow-sm border-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold m-0">{t("step4.p03")}</p>
          <img
            src={InterServer06_02}
            alt={t("step4.p02.alt")}
            className="w-[345px] h-auto rounded-md shadow-sm border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default RentServerGuidStep_4;
