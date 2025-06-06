import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 1: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 1 Installation",
    description: "Installiere die benötigten Abhängigkeiten mit npm.",
    imageCaption: "Test",
  },
};

const WslGuidStep_1 = ({ language }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        image="https://via.placeholder.com/400x200?text=WSL+Schritt+1"
	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default WslGuidStep_1;


