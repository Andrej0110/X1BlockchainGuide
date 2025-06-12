import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer02 from "./Pictures/InterServer02.webp";

const RentServerGuidStep_2 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step2.title")}
        description={t("step2.description")}
        image={InterServer02}
      />
    </div>
  );
};

export default RentServerGuidStep_2;
