import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import InterServer from './Pictures/InterServer08.jpg';

const content = {
  en: {
    title: "Step 5: Enable WSL",
    description: "Open PowerShell as Administrator and run the command 'wsl --install'.",
    description_2: "bla",
    imageCaption: "Test",
    buttonText: "WSL Installation (Windows)", // Neuer Text für den Button
    description_3: "bla",
  },
  de: {
    title: "Schritt 7: IP Adresse",
    description:
      "Unter dem Menüpunkt Servers siehst du deinen ausgewählten Server. Es dauert ca. 5-10 Minuten bis bei dir unter IP eine Adresse angezeigt wird. Diese IP Adresse werden wir brauchen für das Einloggen in den Server. Lass die Seite geöffnet oder notiere dir die IP Adresse, sobald dir eine angezeigt wird.",
    description_2: "Um die Zeit sinnvoll zu nutzen, fahren wir fort mit der Einrichtung von Ubuntu.",
    imageCaption: "Test",
    buttonText: "Ubuntu mit PuTTY (Windows)", // Neuer Text für den Button
    description_3: "Als macOs nutzer kannst du forthfahren mit dem Main Guide.",
  },
};

const RentServerGuidStep_7 = ({ language, activeTab, setActiveTab }) => {
  return (
    <div className="">
      <GuidStepTemplate
        title={content[language].title}
        description={content[language].description}
        description_2={content[language].description_2}

        buttonText={content[language].buttonText} // Button-Text basierend auf Sprache
        activeTab={activeTab} // Aktueller Tab
        setActiveTab={setActiveTab} // Funktion zum Wechseln des Tabs
        tabValue="wsl" // Tab-Wert für diesen Button
        description_3={content[language].description_3}
        image={InterServer}
        imageCaption={content[language].imageCaption}
      />
    </div>
  );
};

export default RentServerGuidStep_7;