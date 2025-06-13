//import { useTranslation } from "react-i18next";
import X1GuidSteps_1 from "./X1GuidSteps_1.jsx";
import X1GuidSteps_2 from "./X1GuidSteps_2.jsx";

const X1GuidSteps = ({ language, activeTab, setActiveTab }) => {
  //const { t } = useTranslation("mainGuidSteps"); // Namespace 'mainGuidSteps' verwenden

  return (
    <div className="">
      <X1GuidSteps_1 />
      <X1GuidSteps_2 />
    </div>
  );
};

export default X1GuidSteps;
