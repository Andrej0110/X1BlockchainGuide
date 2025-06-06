import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 2: WSL Installation (only for Windows Users)",
    description: "Adjust the configuration files.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 2: WSL Installation (nur für Windows)",
    description: "Passe die Konfigurationsdateien an.",
    imageCaption: "Test",
  },
};

const MainGuidStep_2 = ({ id, language }) => {
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={content[language].title}
        description={content[language].description}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1EBeJ9GT-VLXSAYtZSYRpdSV8PRjIHICSA&s"
        imageCaption={content[language].imageCaption}
      />
    </div>
  );
};

MainGuidStep_2.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_2;