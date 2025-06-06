import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer08.jpg';

const content = {
  en: {
    title: "Step 5: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 7: IP Adresse",
    description: "Unter dem Menüpunkt Servers siehst du deinen ausgewählten Server. Es dauert ca. 5-10 Minuten bis bei dir unter IP eine IP Adresse angezeigt wird. Diese IP Adresse werden wir brauchen für das Einloggen in den Server. Lass die Seite geöffnet oder notiere dir die IP Adresse, sobald dir eine angezeigt wird. Herzlichen Glückwunsch, du hast jetzt einen Server.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_7 = ({ language }) => {
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

export default RentServerGuidStep_7;

