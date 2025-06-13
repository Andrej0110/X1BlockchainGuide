import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator14 from "./Pictures/Validator/validator_14.webp";
import DonateButton from "../Buttons/DonateButton.jsx";
import CopyCodeButton from "../Buttons/CopyCodeButton.jsx";

const MainGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id} className="ml-4">
      <GuidStepTemplate
        id={id}
        title={t("step4.title")}
        description={t("step4.description")}
      />

      <p>{t("step4.p01")}</p>
      <p>{t("step4.p02")}</p>
      <p>{t("step4.p03")}</p>
      <CopyCodeButton command={t("step4.p04")} />
      <img
        src={Validator14}
        alt={`Validator 14`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <h2>{t("step4.p05")}</h2>
      <DonateButton />
    </div>
  );
};

export default MainGuidStep_4;
