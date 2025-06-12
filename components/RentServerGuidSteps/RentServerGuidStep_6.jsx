import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer07 from "./Pictures/InterServer07.jpg";

const RentServerGuidStep_6 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step6.title")}
        description={t("step6.description")}
        image={InterServer07}
      />
    </div>
  );
};

export default RentServerGuidStep_6;
