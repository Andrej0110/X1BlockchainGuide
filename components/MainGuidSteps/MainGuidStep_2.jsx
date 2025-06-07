import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 2: WSL Installation (only for Windows Users)",
    description: "Adjust the configuration files.",
    buttonText: "Ubuntu (PuTTY)",
  },
  de: {
    title: "Schritt 2: Zugriff auf Server (Windows)",
    description: "Wenn du Windows als Betriebssystem nutzt, dann benötigst du das Programm PuTTY, um auf den Server zugreifen zu können. Solltest du PuTTY bereits haben, dann kannst du diesen Schritt überspringen. Ansonsten fahre fort mit:",
    buttonText: "Ubuntu (PuTTY)",
  },
};

const MainGuidStep_2 = ({ id, language, activeTab, setActiveTab }) => {
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={content[language].title}
        description={content[language].description}
        buttonText={content[language].buttonText} 
          activeTab={activeTab}
          setActiveTab={setActiveTab} 
          tabValue="wsl"
      />
    </div>
  );
};

MainGuidStep_2.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_2;