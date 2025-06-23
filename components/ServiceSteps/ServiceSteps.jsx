import { useTranslation } from "react-i18next";
import ServiceStep_1 from "./ServiceStep_1.jsx";

const ServiceSteps = ({ language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("wslGuidSteps");

  const steps = [{ component: ServiceStep_1, id: "step1" }];

  return (
    <div className="" id="service">
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

export default ServiceSteps;
