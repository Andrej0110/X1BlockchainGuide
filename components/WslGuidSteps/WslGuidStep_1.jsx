import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Putty01 from "./Pictures/Putty01.jpg";

const WslGuidStep_1 = ({ id }) => {
  const { t } = useTranslation("wslGuidSteps");

  return (
    <div className="">
      <h2 className="text-2xl font-semibold ml-2 p-2">{t("introduction")}</h2>
      <p className="ml-4">{t("p01")}</p>

      <p className="ml-4">
        <Trans
          i18nKey="wslGuidSteps:p02"
          components={{
            telegramLink: (
              <a
                href="https://www.putty.org/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <div id={id} className="">
        <GuidStepTemplate
          id={id}
          title={t("step1.title")}
          description={t("step1.description")}
          image={Putty01}
        />
      </div>
    </div>
  );
};

export default WslGuidStep_1;
