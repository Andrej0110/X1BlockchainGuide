import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import Putty from './Pictures/Putty02.jpg';

const content = {
  en: {
    title: "Step 2: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    buttonText: "Main Guide",
    imageCaption: "Test",
  },
  de: {
  	title: "Schritt 2: Download und Installation",
    description: "Sobald du es geöffnet hast, sollte es so aussehen wie im Bild unten dargestellt. Und das war’s schon, du bist fertig. Du hast nun ein Programm, mit dem du auf deinen neuen Server zugreifen kannst. Fahre fort mit Schritt 3 unter Main Guide.",
    buttonText: "Main Guide",
    imageCaption: "Test",
  },
};

const WslGuidStep_2 = ({ language, activeTab, setActiveTab, imageClassName  }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        buttonText={content[language].buttonText} // Button-Text basierend auf Sprache
        	activeTab={activeTab} // Aktueller Tab
        	setActiveTab={setActiveTab} // Funktion zum Wechseln des Tabs
        	tabValue="main" // Tab-Wert für diesen Button
	        image={Putty}
	        imageCaption={content[language].imageCaption}
	        imageClassName="mt-4 w-[700px] h-auto rounded-md shadow-sm"
     	 />
		</div>
	);
}

export default WslGuidStep_2;


