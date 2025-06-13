import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer08 from "./Pictures/InterServer08.webp";

const RentServerGuidStep_7 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  const handleButtonClickWsl = () => {
    setActiveTab("wsl");
  };
  const handleButtonClickMain = () => {
    setActiveTab("main");
  };

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step7.title")}
        description={t("step7.description")}
        image={InterServer08}
      />

      <p className="ml-4">
        <Trans
          i18nKey="rentServerGuidSteps:step7:p01"
          components={{
            telegramLink: (
              <a
                onClick={handleButtonClickWsl}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">
        <Trans
          i18nKey="rentServerGuidSteps:step7:p02"
          components={{
            telegramLink: (
              <a
                onClick={handleButtonClickMain}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              />
            ),
          }}
        />
      </p>
    </div>
  );
};

export default RentServerGuidStep_7;
