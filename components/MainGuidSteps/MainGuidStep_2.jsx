import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import PuttyAddUser01 from "./Pictures/Add_User/PuttyAddUser_01.webp";

const MainGuidStep_2 = ({ id, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps");

  const handleButtonClickWsl = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("wsl");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const wslSection = document.getElementById("wsl");
      if (wslSection) {
        wslSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step2.title")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabValue="wsl"
      />

      <div className="ml-4 mr-4" id="step2">
        <p>
          <Trans
            i18nKey="mainGuidSteps:step2.p01"
            components={{
              telegramLink: (
                <a
                  href="#wsl" // Verweist auf den wsl Guide Abschnitt
                  onClick={handleButtonClickWsl}
                  className="link"
                ></a>
              ),
            }}
          />
        </p>

        <img src={PuttyAddUser01} className="w-[600px] img" />
      </div>
    </div>
  );
};

export default MainGuidStep_2;
