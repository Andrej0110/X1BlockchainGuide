import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer01.jpg';

const content = {
  en: {
  	//headline: "bla",
  	//headlineParagraph_01: "bla",
    title: "Step 1: blabla",
    description: "blabla",
    imageCaption: "blabla",
  },
  de: {
    //headline: "Einrichten eines Servers",
    //headlineParagraph_01: "In dieser Anleitung zeige ich dir, welchen Server du wählen solltest, um die erforderliche Leistung für deinen Validator auszuwählen.",
    title: "Schritt 1: Auswahl dedizierter Server",
    description: "Klicke oben in der Zeile auf Server und wähle anschließend DEDICATED Home. Der Begriff dedicated (dedizierter Server) bedeutet, dass die gesamte Hardware eines physischen Servers nur einem einzigen Kunden zur Verfügung steht. Das unterscheidet einen dedizierten Server von virtuellen Servern (VPS), bei denen sich mehrere Kunden die Ressourcen eines Servers teilen.",
    imageCaption: "Test",
  },
};

const RentServerGuidStep_1 = ({ language, imageClassName }) => {
	return (
		<div className="">
	      <GuidStepTemplate
	      	//headline={content[language].headline}
	      	//headlineParagraph_01={content[language].headlineParagraph_01}
	        title={content[language].title}
	        description={content[language].description}
	        image={InterServer}
	        imageCaption={content[language].imageCaption}
     	 />
		</div>
	);
}

export default RentServerGuidStep_1;

