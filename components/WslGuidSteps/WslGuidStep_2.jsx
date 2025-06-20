import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Putty02 from "./Pictures/Putty02.webp";

const WslGuidStep_2 = ({ id }) => {
  const { t } = useTranslation("wslGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step2.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step2.p01")}</p>
        <img src={Putty02} className="w-[600px] img mb-2" />
      </div>
    </div>
  );
};

export default WslGuidStep_2;
