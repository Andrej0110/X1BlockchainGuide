import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator01 from "./Pictures/Validator/validator_01.webp";
import Validator02 from "./Pictures/Validator/validator_02.webp";
import Validator03 from "./Pictures/Validator/validator_03.webp";
import Validator04 from "./Pictures/Validator/validator_04.webp";
import Validator05 from "./Pictures/Validator/validator_05.webp";
import Validator06 from "./Pictures/Validator/validator_06.webp";
import Validator07 from "./Pictures/Validator/validator_07.webp";
import Validator08 from "./Pictures/Validator/validator_08.webp";
import Validator09 from "./Pictures/Validator/validator_09.webp";
import Validator10 from "./Pictures/Validator/validator_10.webp";
import Validator11 from "./Pictures/Validator/validator_11.webp";
import Validator12 from "./Pictures/Validator/validator_12.webp";
import Validator13 from "./Pictures/Validator/validator_13.webp";
import Validator15 from "./Pictures/Validator/validator_15.webp";
import CopyCodeButton from "../Buttons/CopyCodeButton.jsx";

const MainGuidStep_3 = ({ id }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step3.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step3.description")}</p>
        <p>
          {t("step3.p01", {
            telegramLink: (
              <a
                href="https://github.com/BlackBeard085/x1console"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("step3.links.telegramLink")}
              </a>
            ),
          })}
        </p>

        <p>{t("step3.p02")}</p>
        <CopyCodeButton command={t("step3.p03")} />
        <p>{t("step3.p04")}</p>
        <CopyCodeButton command={t("step3.p05")} />
        <p>{t("step3.p06")}</p>
        <img src={Validator01} alt="Validator 1" className="w-[800px] img" />
        <p>{t("step3.p07")}</p>
        <p>{t("step3.p08")}</p>
        <img src={Validator02} alt="Validator 2" className="w-[800px] img" />
        <p>{t("step3.p09")}</p>
        <p>{t("step3.p10")}</p>
        <img src={Validator03} alt="Validator 3" className="w-[600px] img" />
        <img src={Validator04} alt="Validator 4" className="w-[900px] img" />
        <p>{t("step3.p11")}</p>
        <img src={Validator05} alt="Validator 5" className="w-[600px] img" />
        <img src={Validator06} alt="Validator 6" className="w-[900px] img" />
        <img src={Validator07} alt="Validator 7" className="w-[900px] img" />
        <img src={Validator08} alt="Validator 8" className="w-[900px] img" />
        <img src={Validator09} alt="Validator 9" className="w-[900px] img" />
        <p>{t("step3.p12")}</p>
        <p>{t("step3.p13")}</p>
        <p>
          {t("step3.p14", {
            faucetLink: (
              <a
                href="https://faucet.testnet.x1.xyz/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("step3.links.faucetLink")}
              </a>
            ),
          })}
        </p>
        <p>
          {t("step3.p15", {
            telegramGroupLink: (
              <a
                href="https://t.me/+yT0VAcNPFqM3OGQ0"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("step3.links.telegramGroupLink")}
              </a>
            ),
            faucetLink: (
              <a
                href="https://faucet.testnet.x1.xyz/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("step3.links.faucetLink")}
              </a>
            ),
          })}
        </p>
        <p>
          {t("step3.p16", {
            telegramGuideLink: (
              <a
                href="https://t.me/X1BlockchainGuide"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("step3.links.telegramGuideLink")}
              </a>
            ),
          })}
        </p>
        <p>{t("step3.p17")}</p>
        <img src={Validator10} alt="Validator 10" className="mt-4 w-[900px] img" />
        <p>{t("step3.p18")}</p>
        <img src={Validator11} alt="Validator 11" className="w-[900px] img" />
        <img src={Validator12} alt="Validator 12" className="w-[400px] img" />
        <p>{t("step3.p19")}</p>
        <CopyCodeButton command={t("step3.p20")} />
        <p>{t("step3.p21")}</p>
        <CopyCodeButton command={t("step3.p22")} />
        <img src={Validator13} alt="Validator 13" className="w-[900px] img" />
        <p>{t("step3.p23")}</p>
        <img src={Validator15} alt="Validator 15" className="w-[900px] img" />
        <p>{t("step3.p24")}</p>
      </div>
    </div>
  );
};

export default MainGuidStep_3;