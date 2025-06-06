import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';

const content = {
  en: {
    title: "Step 3: Connect to Server and add User ",
    description: "Adjust the configuration files.",
    imageCaption: "Test",
  },
  de: {
    title: "Schritt 3: Mit Server verbinden und Benutzer anlegen",
    description: "Passe die Konfigurationsdateien an.",
    imageCaption: "Test",
  },
};

const MainGuidStep_3 = ({ id, language }) => {
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

MainGuidStep_3.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_3;