import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 1: Rent a Server",
    description: "Install the required dependencies with npm.",
    buttonText: "Rent Server",
  },
  de: {
    title: "Schritt 1: Server mieten",
    description: "Um deinen X1 Validator einzurichten benötigst du einen Server, den man bei dieversen Anbietern monatlich mieten kann. Wenn du bereits einen Server hast, der den Mindestanforderungen entspricht, dann kannst du diesen Schritt überspringen. Ansonstne fahre fohrt mit:",
    buttonText: "Server mieten",
  },
};

const MainGuidStep_1 = ({ id, language, activeTab, setActiveTab }) => {
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={content[language].title}
        description={content[language].description}
        buttonText={content[language].buttonText} 
          activeTab={activeTab}
          setActiveTab={setActiveTab} 
          tabValue="rent" 
      />
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_1.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_1;