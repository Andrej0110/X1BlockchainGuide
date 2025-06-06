import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer01.jpg';

const content = {
  en: {
    title: "Step 1: blabla",
    description: "blabla",
    imageCaption: "blabla",
  },
  de: {
    title: "Schritt 1: Auswahl dedizierter Server",
    description: "Klicke oben in der Zeile auf Server und wähle anschließend DEDICATED Home. Der Begriff dedicated (dedizierten) Server bedeutet, dass die gesamte Hardware eines physischen Servers nur einem einzigen Kunden zur Verfügung steht. Das unterscheidet einen dedizierten Server von virtuellen Servern (VPS), bei denen sich mehrere Kunden die Ressourcen eines Servers teilen.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_1 = ({ language }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	        title={content[language].title}
	        	        description={content[language].description}
	        image={InterServer} className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default RentServerGuidStep_1;

