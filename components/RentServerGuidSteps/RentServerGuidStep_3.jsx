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
        imageClassName="mt-4 w-[700px] h-auto rounded-md shadow-sm"
      />
      <div className="image-container">
        <p className="ml-4">{t("step.p01")}</p>
        <img
          src={InterServer04}
          alt={`Test1`}
          className="mt-4 w-[700px] h-auto rounded-md shadow-sm"
        />
        <img
          src={InterServer05}
          alt={`Test2`}
          className="mt-4 w-[700px] h-auto rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};

export default RentServerGuidStep_3;
