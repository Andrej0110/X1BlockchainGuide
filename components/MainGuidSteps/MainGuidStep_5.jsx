import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator14 from "./Pictures/Validator/validator_14.webp";
import DonateButton from "../Buttons/DonateButton.jsx";

const MainGuidStep_4 = ({ id }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step5.title")}
        description={t("step5.description")}
      />

      <p className="ml-4">{t("step5.p01")}</p>
      <p className="ml-4">{t("step5.p02")}</p>
      <p className="ml-4">{t("step5.p03")}</p>
      <p className="ml-4">{t("step5.p04")}</p>
      <img
        src={Validator14}
        alt={`Validator 14`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <h2 className="ml-4">{t("step5.p05")}</h2>
      <DonateButton />
    </div>
  );
};

export default MainGuidStep_4;
