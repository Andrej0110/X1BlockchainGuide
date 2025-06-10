import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer07.jpg';

const content = {
  en: {
    title: "Step 5: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 6: Root Passwort vergeben und bezahlen",
    description: "Den Server-Hostname kannst du beliebig vergeben. Diesen Namen siehst nur du im Terminal, wenn wir den Validator auf den Server installieren. Das Root-Passwort ist wichtig, um sich auf den Server einloggen zu können. Vergeben ein neues Passwort und merke es dir! Schließe den Kauf ab.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_6 = ({ language, imageClassName }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        image={InterServer} 

	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default RentServerGuidStep_6;

