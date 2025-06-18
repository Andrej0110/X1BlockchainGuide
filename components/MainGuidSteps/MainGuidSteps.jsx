import { useTranslation } from "react-i18next";
import MainGuidStep_1 from "./MainGuidStep_1.jsx";
import MainGuidStep_2 from "./MainGuidStep_2.jsx";
import MainGuidStep_3 from "./MainGuidStep_3.jsx";
import MainGuidStep_4 from "./MainGuidStep_4.jsx";
import TableOfContentMainGuid from "./TableOfContentMainGuid.jsx";

const MainGuidSteps = ({ language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("mainGuidSteps"); // Namespace 'mainGuidSteps' verwenden

  const steps = [
    { component: MainGuidStep_1, id: "step1" },
    { component: MainGuidStep_2, id: "step2" },
    { component: MainGuidStep_3, id: "step3" },
    { component: MainGuidStep_4, id: "step4" },
  ];

  // Optional: Schritt-Titel direkt aus Übersetzungen holen
  const stepTitles = steps.map((step) => t(`${step.id}.title`));

  return (
    <div className="" id="main">
      {" "}
      {/* Container mit eindeutiger ID */}
      <TableOfContentMainGuid language={language} stepTitles={stepTitles} />
      {steps.map((step) => {
        const StepComponent = step.component;
        return (
          <StepComponent
            key={step.id}
            id={step.id}
            language={language}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
};

export default MainGuidSteps;
