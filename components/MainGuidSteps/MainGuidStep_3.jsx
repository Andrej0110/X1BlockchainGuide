import { useTranslation } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import PuttyAddUser01 from "./Pictures/Add_User/PuttyAddUser_01.jpg";
import PuttyAddUser02 from "./Pictures/Add_User/PuttyAddUser_02.jpg";
import PuttyAddUser03 from "./Pictures/Add_User/PuttyAddUser_03.jpg";
import PuttyAddUser05 from "./Pictures/Add_User/PuttyAddUser_05.jpg";
import PuttyAddUser06 from "./Pictures/Add_User/PuttyAddUser_06.jpg";

const MainGuidStep_3 = ({ id, language }) => {
  const { t } = useTranslation("mainGuidSteps");
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step3.title")}
        description={t("step3.description")}
        image={PuttyAddUser01}
        imageClassName="mt-4 w-[600px] h-auto rounded-md shadow-sm"
        //imageCaption={content[language].imageCaption}
      />
      <p className="ml-4">{t("step3.p01")}</p>
      <img
        src={PuttyAddUser02}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p02")}</p>
      <p className="ml-4">{t("step3.p03")}</p>
      <p className="ml-4">{t("step3.p04")}</p>
      <img
        src={PuttyAddUser03}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step3.p05")}</p>
      <p className="ml-4">{t("step3.p06")}</p>
      <p className="ml-4">{t("step3.p07")}</p>
      <p className="ml-4">{t("step3.p08")}</p>
      <p className="ml-4">{t("step3.p09")}</p>
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

MainGuidStep_3.getTitle = (language) => {
  const { t } = useTranslation("mainGuidSteps");
};

export default MainGuidStep_3;
