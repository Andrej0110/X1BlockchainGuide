import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import Putty from './Pictures/Putty01.jpg';

const content = {
  en: {
    //headline: "bla",
    //headlineParagraph_01: "bla",
    title: "Step 1: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
  	//headline: "Einrichten eines Fernzugriffes",
  	//headlineParagraph_01: "PuTTY ermöglicht es, sich über SSH (Secure Shell) sicher mit entfernten Linux-Servern oder anderen Geräten zu verbinden, um sie zu verwalten oder Befehle auszuführen. Wir werden das Programm nutzen, um auf dem Server den X1 Blockchain Validator einzurichten.",
    title: "Schritt 1: Download und Installation",
    description: "Lade die Datei herunter und installiere das Programm.",
    imageCaption: "Test",
  },
};

const WslGuidStep_1 = ({ language }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	      	//headline={content[language].headline}
	      	//headlineParagraph_01={content[language].headlineParagraph_01}
	        title={content[language].title}
	        description={content[language].description}
	        image={Putty}
	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default WslGuidStep_1;


