import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import PuttyAddUser01 from "./Pictures/PuttyAddUser_01.webp";
import PuttyAddUser02 from "./Pictures/PuttyAddUser_02.webp";
import PuttyAddUser03 from "./Pictures/PuttyAddUser_03.webp";
import PuttyAddUser05 from "./Pictures/PuttyAddUser_05.webp";
import PuttyAddUser06 from "./Pictures/PuttyAddUser_06.webp";
import CopyCodeButton from "../Buttons/CopyCodeButton.jsx";

const WslGuidStep_3 = ({ id }) => {
  const { t } = useTranslation("wslGuidSteps");
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step3.title")}
        description={t("step3.description")}
        image={PuttyAddUser01}
        imageClassName="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p01")}</p>
      <img
        src={PuttyAddUser02}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p02")}</p>
      <p className="ml-4">{t("step3.p03")}</p>
      <div className="ml-4">
        <CopyCodeButton command={t("step3.p03_01")} />
      </div>

      <p className="ml-4">{t("step3.p04")}</p>
      <img
        src={PuttyAddUser03}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p05")}</p>
      <p className="ml-4">{t("step3.p06")}</p>
      <p className="ml-4">{t("step3.p07")}</p>
      <p className="ml-4">{t("step3.p08")}</p>

      <div className="ml-4">
        <p>3.</p>
        <CopyCodeButton command={t("step3.p09")} />
      </div>
      <p className="ml-4">{t("step3.p10")}</p>
      <img
        src={PuttyAddUser05}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p11")}</p>
      <p className="ml-4">{t("step3.p12")}</p>
      <p className="ml-4">{t("step3.p13")}</p>
      <img
        src={PuttyAddUser06}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

export default WslGuidStep_3;
