import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import InterServer01 from "./Pictures/InterServer01.webp";

const RentServerGuidStep_1 = ({ id }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <div id={id} className="">
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{t("introduction")}</h2>
        <p>{t("p01")}</p>

        <p>
          <Trans
            i18nKey="rentServerGuidSteps:p02"
            components={{
              telegramLink: (
                <a
                  href="https://docs.x1.xyz/validating/performance/hardware-requirements"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>

        <p>
          <Trans
            i18nKey="rentServerGuidSteps:p03"
            components={{
              telegramLink: (
                <a
                  href="https://www.interserver.net/r/1013595"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>
      </div>
      <GuidStepTemplate
        id={id}
        title={t("step1.title")}
        description={t("step1.description")}
        image={InterServer01}
      />
    </div>
  );
};

export default RentServerGuidStep_1;
