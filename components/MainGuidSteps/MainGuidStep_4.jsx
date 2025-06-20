import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator14 from "./Pictures/Validator/validator_14.webp";
import DonateButton from "../Buttons/DonateButton.jsx";
import CopyCodeButton from "../Buttons/CopyCodeButton.jsx";

const MainGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id}>
      <GuidStepTemplate id={id} title={t("step4.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step4.description")}</p>
        <p>{t("step4.p01")}</p>
        <p>{t("step4.p02")}</p>
        <p>{t("step4.p03")}</p>

        <div className="mb-4 mt-2">
          <CopyCodeButton command={t("step4.p04")} />
        </div>

        <img src={Validator14} alt={`Validator 14`} className="w-[900px] img" />
        <h2>{t("step4.p05")}</h2>
        <div className="mb-2">
          <DonateButton />
        </div>
      </div>
    </div>
  );
};

export default MainGuidStep_4;
