import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 1: Rent a Server",
    description: "Install the required dependencies with npm.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 1: Server mieten",
    description: "Installiere die benötigten Abhängigkeiten mit npm.",
    imageCaption: "Test",
  },
};

const MainGuidStep_1 = ({ id, language }) => {
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={content[language].title}
        description={content[language].description}
        image="https://knowledge.hubspot.com/hubfs/how-to-start-coding-13-20250321-3779156.webp"
        imageCaption={content[language].imageCaption}
      />
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_1.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_1;