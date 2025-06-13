import { useTranslation } from "react-i18next";
import WslGuidStep_1 from "./WslGuidStep_1.jsx";
import WslGuidStep_2 from "./WslGuidStep_2.jsx";
import WslGuidStep_3 from "./WslGuidStep_3.jsx";
import TableOfContentWslGuid from "./TableOfContentWslGuid.jsx";

const WslGuidSteps = ({ language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("wslGuidSteps");

  const steps = [
    { component: WslGuidStep_1, id: "step1" },
    { component: WslGuidStep_2, id: "step2" },
    { component: WslGuidStep_3, id: "step3" },
  ];

  const stepTitles = steps.map((step) => t(`${step.id}.title`));

  return (
    <div className="">
      <TableOfContentWslGuid language={language} stepTitles={stepTitles} />
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

export default WslGuidSteps;
