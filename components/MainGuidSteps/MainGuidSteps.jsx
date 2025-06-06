import MainGuidStep_1 from './MainGuidStep_1.jsx';
import MainGuidStep_2 from './MainGuidStep_2.jsx';
import MainGuidStep_3 from './MainGuidStep_3.jsx';
import TableOfContentMainGuid from './TableOfContentMainGuid.jsx';

const MainGuidSteps = ({ language }) => {
  const steps = [
    { component: MainGuidStep_1, id: 'step1' },
    { component: MainGuidStep_2, id: 'step2' },
    { component: MainGuidStep_3, id: 'step3' },
  ];

  // Dynamisches Abrufen der Titel aus den Komponenten
  const stepTitles = steps.map(step => step.component.getTitle(language));

  return (
    <div className="">
      <TableOfContentMainGuid language={language} stepTitles={stepTitles} />
      {steps.map((step) => {
        const StepComponent = step.component;
        return <StepComponent key={step.id} id={step.id} language={language} />;
      })}
    </div>
  );
};

export default MainGuidSteps;