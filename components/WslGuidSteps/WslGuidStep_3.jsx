import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import PuttyAddUser01 from "./Pictures/PuttyAddUser_01.webp";
import PuttyAddUser02 from "./Pictures/PuttyAddUser_02.webp";
import PuttyAddUser03 from "./Pictures/PuttyAddUser_03.webp";
import PuttyAddUser05 from "./Pictures/PuttyAddUser_05.webp";
import PuttyAddUser06 from "./Pictures/PuttyAddUser_06.webp";
import CopyCodeButton from "../Buttons/CopyCodeButton.jsx";

const WslGuidStep_3 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("wslGuidSteps");

  const handleButtonClickMain = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("main");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const mainSection = document.getElementById("main");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div id={id} className="">
      <GuidStepTemplate id={id} title={t("step3.title")} />

      <div className="ml-4 mr-4">
        <p>{t("step3.p01")}</p>
        <img src={PuttyAddUser01} className="w-[600px] img mb-4" />
      </div>

      <div className="ml-4 mr-4">
        <p>{t("step3.p02")}</p>
        <img src={PuttyAddUser02} className="w-[600px] img mb-4" />
        <p>{t("step3.p03")}</p>

        <div className="mb-4 mt-2">
          <p>{t("step3.p04")}</p>
          <CopyCodeButton command={t("step3.p05")} />
        </div>

        <p>{t("step3.p06")}</p>
        <img src={PuttyAddUser03} className="w-[600px] img mb-4" />
        <p>{t("step3.p07")}</p>
        <p className="mt-2">{t("step3.p08")}</p>
        <p className="mt-2">{t("step3.p09")}</p>
        <p className="mt-2">{t("step3.p10")}</p>

        <div className="flex items-center mb-4 mt-2">
          <p className="mr-2">3.</p>
          <CopyCodeButton command={t("step3.p11")} />
        </div>

        <p>{t("step3.p12")}</p>
        <img src={PuttyAddUser05} className="w-[600px] img mb-4" />

        <p>
          <Trans
            i18nKey="wslGuidSteps:step3.p13"
            components={{
              telegramLink: (
                <a
                  href="#main" // Verweist auf den Main Guide Abschnitt
                  onClick={handleButtonClickMain}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                />
              ),
            }}
          />
        </p>

        <img src={PuttyAddUser06} className="w-[600px] img mb-2" />
      </div>
    </div>
  );
};

export default WslGuidStep_3;
