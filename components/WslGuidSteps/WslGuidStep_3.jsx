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
        imageClassName="w-[600px] img"
      />
      <div className="ml-4">
        <p>{t("step3.p01")}</p>
        <img src={PuttyAddUser02} className="w-[600px] img" />
        <p>{t("step3.p02")}</p>
        <p>{t("step3.p03")}</p>
        <CopyCodeButton command={t("step3.p03_01")} />
        <p>{t("step3.p04")}</p>
        <img src={PuttyAddUser03} className="w-[600px] img" />
        <p>{t("step3.p05")}</p>
        <p>{t("step3.p06")}</p>
        <p>{t("step3.p07")}</p>
        <p>{t("step3.p08")}</p>
        <p>3.</p>
        <CopyCodeButton command={t("step3.p09")} />
        <p>{t("step3.p10")}</p>
        <img src={PuttyAddUser05} className="w-[600px] img" />
        <p>{t("step3.p11")}</p>
        <p>{t("step3.p12")}</p>
        <p>{t("step3.p13")}</p>
        <img src={PuttyAddUser06} className="w-[600px] img" />
      </div>
    </div>
  );
};

export default WslGuidStep_3;
