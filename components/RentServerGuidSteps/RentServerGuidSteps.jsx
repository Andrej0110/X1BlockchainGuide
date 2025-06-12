import { useTranslation } from "react-i18next";
import RentServerGuidStep_1 from "./RentServerGuidStep_1.jsx";
import RentServerGuidStep_2 from "./RentServerGuidStep_2.jsx";
import RentServerGuidStep_3 from "./RentServerGuidStep_3.jsx";
import RentServerGuidStep_4 from "./RentServerGuidStep_4.jsx";
import RentServerGuidStep_5 from "./RentServerGuidStep_5.jsx";
import RentServerGuidStep_6 from "./RentServerGuidStep_6.jsx";
import RentServerGuidStep_7 from "./RentServerGuidStep_7.jsx";
import TableOfContentRentGuid from "./TableOfContentRentGuid.jsx";

const RentServerGuidSteps = ({ language, activeTab, setActiveTab }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  const steps = [
    { component: RentServerGuidStep_1, id: "step1" },
    { component: RentServerGuidStep_2, id: "step2" },
    { component: RentServerGuidStep_3, id: "step3" },
    { component: RentServerGuidStep_4, id: "step4" },
    { component: RentServerGuidStep_5, id: "step5" },
    { component: RentServerGuidStep_6, id: "step6" },
    { component: RentServerGuidStep_7, id: "step7" },
  ];

  const stepTitles = steps.map((step) => t(`${step.id}.title`));

  return (
    <div className="">
      <TableOfContentRentGuid language={language} stepTitles={stepTitles} />
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

export default RentServerGuidSteps;
