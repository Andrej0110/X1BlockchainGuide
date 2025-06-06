import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer06.jpg';

const content = {
  en: {
    title: "Step 4: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 4: Auswahl prüfen",
    description: "Prüfe deine Auswahl und klicke anschließend auf CONTINUE.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_4 = ({ language, imageClassName }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        image={InterServer} 
	        imageClassName="mt-4 w-[400px] h-auto rounded-md shadow-sm"
	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default RentServerGuidStep_4;

