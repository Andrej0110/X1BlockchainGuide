import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer06 from "./Pictures/InterServer06.jpg";

const RentServerGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step4.title")}
        description={t("step4.description")}
        image={InterServer06}
        imageClassName="mt-4 w-[400px] h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

export default RentServerGuidStep_4;
