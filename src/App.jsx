import "./components/i18n/i18n.js"; // Korrigierter Pfad, abhängig von deiner Struktur
import { useState, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import reactLogo from "./assets/react.svg";
import Tilt from "react-parallax-tilt";
import Logo from "../components/Logo/x1Logo";
import MainGuidSteps from "../components/MainGuidSteps/MainGuidSteps.jsx";
import WslGuidSteps from "../components/WslGuidSteps/WslGuidSteps.jsx";
import RentServerGuidSteps from "../components/RentServerGuidSteps/RentServerGuidSteps.jsx";
import X1GuidSteps from "../components/X1GuidSteps/X1GuidSteps.jsx";
import MenuButtons from "../components/Buttons/MenuButtons.jsx";
import LanguageButtons from "../components/Buttons/LanguageButtons.jsx";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("x1");
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  // Synchronisiere i18next-Sprache mit language-State
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <div>
        <h1 className="p-2 text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <Logo />
          {t("logo_title", { ns: "app" })}
        </h1>
        <div className="ml-4">
          <LanguageButtons language={language} setLanguage={setLanguage} />
        </div>

        <MenuButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "x1" && (
          <X1GuidSteps
            language={language}
            t={t}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === "main" && (
          <MainGuidSteps
            language={language}
            t={t}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === "wsl" && (
          <WslGuidSteps
            language={language}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === "rent" && (
          <RentServerGuidSteps
            language={language}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </Suspense>
  );
}

export default App;
