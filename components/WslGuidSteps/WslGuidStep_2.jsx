import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Putty02 from "./Pictures/Putty02.webp";

const WslGuidStep_2 = ({ id }) => {
  const { t } = useTranslation("wslGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step2.title")}
        description={t("step2.description")}
        image={Putty02}
        imageClassName="mt-4 w-[700px] h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

export default WslGuidStep_2;
