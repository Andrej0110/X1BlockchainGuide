import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator01 from "./Pictures/Validator/validator_01.jpg";
import Validator02 from "./Pictures/Validator/validator_02.jpg";
import Validator03 from "./Pictures/Validator/validator_03.jpg";
import Validator04 from "./Pictures/Validator/validator_04.jpg";
import Validator05 from "./Pictures/Validator/validator_05.jpg";
import Validator06 from "./Pictures/Validator/validator_06.jpg";
import Validator07 from "./Pictures/Validator/validator_07.jpg";
import Validator08 from "./Pictures/Validator/validator_08.jpg";
import Validator09 from "./Pictures/Validator/validator_09.jpg";
import Validator10 from "./Pictures/Validator/validator_10.jpg";
import Validator11 from "./Pictures/Validator/validator_11.jpg";
import Validator12 from "./Pictures/Validator/validator_12.jpg";
import Validator13 from "./Pictures/Validator/validator_13.jpg";

const MainGuidStep_4 = ({ id, language }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step4.title")}
        description={t("step4.description")}
      />
      <p className="ml-4">
        <Trans
          i18nKey="mainGuidSteps:step4.p01"
          components={{
            telegramLink: (
              <a
                href="https://github.com/BlackBeard085/x1console"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">{t("step4.p02")}</p>
      <p className="ml-4">{t("step4.p03")}</p>
      <p className="ml-4">{t("step4.p04")}</p>
      <p className="ml-4">{t("step4.p05")}</p>
      <p className="ml-4">{t("step4.p06")}</p>
      <img
        src={Validator01}
        alt={`Validator 1`}
        className="mt-4 w-[800px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p07")}</p>
      <p className="ml-4">{t("step4.p08")}</p>
      <img
        src={Validator02}
        alt={`Validator 2`}
        className="mt-4 w-[800px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p09")}</p>
      <p className="ml-4">{t("step4.p10")}</p>
      <img
        src={Validator03}
        alt={`Validator 3`}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator04}
        alt={`Validator 4`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p11")}</p>
      <img
        src={Validator05}
        alt={`Validator 5`}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator06}
        alt={`Validator 6`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator07}
        alt={`Validator 7`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator08}
        alt={`Validator 8`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator09}
        alt={`Validator 9`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p12")}</p>
      <p className="ml-4">{t("step4.p13")}</p>
      <p className="ml-4">
        <Trans
          i18nKey="mainGuidSteps:step4.p14"
          components={{
            telegramLink: (
              <a
                href="https://faucet.testnet.x1.xyz/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">
        <Trans
          i18nKey="mainGuidSteps:step4.p15"
          components={{
            telegramLink: (
              <a
                href="https://t.me/+yT0VAcNPFqM3OGQ0"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">
        <Trans
          i18nKey="mainGuidSteps:step4.p16"
          components={{
            telegramLink: (
              <a
                href="https://t.me/X1BlockchainGuide"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">{t("step4.p17")}</p>
      <img
        src={Validator10}
        alt={`Validator 10`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p18")}</p>
      <img
        src={Validator11}
        alt={`Validator 11`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator12}
        alt={`Validator 12`}
        className="mt-4 w-[400px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p19")}</p>
      <p className="ml-4">{t("step4.p20")}</p>
      <p className="ml-4">{t("step4.p21")}</p>
      <p className="ml-4">{t("step4.p22")}</p>
      <img
        src={Validator13}
        alt={`Validator 13`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p23")}</p>
      <p className="ml-4">{t("step4.p24")}</p>
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_4.getTitle = (language) => {
  const { t } = useTranslation("mainGuidSteps");
  return t("step4.title");
};

export default MainGuidStep_4;
