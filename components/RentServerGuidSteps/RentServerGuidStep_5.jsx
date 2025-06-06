import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 5: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 5: Account anlegen und anmelden",
    description: "Lege einen Account an und logge dich ein.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_5 = ({ language }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}

     	 />
		</div>
	);
}

export default RentServerGuidStep_5;

