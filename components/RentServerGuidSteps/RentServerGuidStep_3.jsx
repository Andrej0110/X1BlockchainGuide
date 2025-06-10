import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer03 from './Pictures/InterServer03.jpg';
import InterServer04 from './Pictures/InterServer04.jpg';
import InterServer05 from './Pictures/InterServer05.jpg';

const content = {
  en: {
    title: "Step 3: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 3: Auswahl Hardware Spezifikation",
    description: "Die Mindestanforderungen für den RAM-Speicher betragen 128 GB. Jack Levin empfiehlt, mehr zu verwenden. Du kannst dich für 128 GB entscheiden und später aufrüsten oder direkt 192 GB auswählen. Im Testnet sind derzeit 2 TB NVMe ausreichend, und du kannst dir die Mehrkosten vorerst sparen. Im Mainnet werden später 4 TB NVMe notwendig sein.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_3 = ({ language, imageClassName }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        description={content[language].description}
	        image={InterServer03} 
	        imageCaption={content[language].imageCaption}
          imageClassName="mt-4 w-[700px] h-auto rounded-md shadow-sm"
     	 />
     	<div className="image-container">
        <p className="ml-4">Unter "Select OS" wählen wir Ubuntu LTS aus. Den Rest können wir so belassen, wie er durch die Vorauswahl festgelegt wurde. Bestätige deine Auswahl.</p>
        <img src={InterServer04} alt={`Test1`} className="mt-4 w-[700px] h-auto rounded-md shadow-sm"  />
        <img src={InterServer05} alt={`Test2`} className="mt-4 w-[700px] h-auto rounded-md shadow-sm"  />
      </div>

		</div>
	);
}

export default RentServerGuidStep_3;

