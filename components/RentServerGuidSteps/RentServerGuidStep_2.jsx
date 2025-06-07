import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer02.jpg';

const content = {
  en: {
    title: "Step 2: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 2: Auswahl Server",
    description: "Die Mindestanforderung sind 12 CPU's und da wir für 153$ auch einen mit 16 CPU's bekommen können, wählen wir den AMD RYZEN 7950X3D aus und klicken auf CONFIGURE NOW.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_2 = ({ language, imageClassName }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        image={InterServer} 
	        imageCaption={content[language].imageCaption}
	        imageClassName="mt-4 w-[700px] h-auto rounded-md shadow-sm"
     	 />
		</div>
	);
}

export default RentServerGuidStep_2;

