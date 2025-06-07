import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import Validator01 from './Pictures/Validator/validator_01.jpg';
import Validator02 from './Pictures/Validator/validator_02.jpg';
import Validator03 from './Pictures/Validator/validator_03.jpg';
import Validator04 from './Pictures/Validator/validator_04.jpg';
import Validator05 from './Pictures/Validator/validator_05.jpg';
import Validator06 from './Pictures/Validator/validator_06.jpg';
import Validator07 from './Pictures/Validator/validator_07.jpg';
import Validator08 from './Pictures/Validator/validator_08.jpg';
import Validator09 from './Pictures/Validator/validator_09.jpg';

const content = {
  en: {
    title: "Step 1: Rent a Server",
    description: "Install the required dependencies with npm.",
    //description_2: "..."
  },
  de: {
    title: "Schritt 4: Server einrichten",
    description: "Herzlichen Glückwunsch, dir fehlt nur noch der letzte Schritt um deinen X1 Validator einzurichten.",
    //description_2: "Wir fangen nun damit an die X1 Console von BlackBeard zu kopieren.",
  },
};

const MainGuidStep_4 = ({ id, language }) => {
  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={content[language].title}
        description={content[language].description}
        description_2={content[language].description_2}
    />
    <p className="ml-4">Wir fangen nun damit an die X1 Console von {' '} 
      <a href="https://github.com/BlackBeard085/x1console" 
      className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" 
      target="_blank">BlackBeard
      </a> 
      {' '}zu kopieren. Kleiner Tipp, einfügen kannst du entweder mit einem Klick der rechten Maustaste oder Shift+einfg. </p>
      <p className="ml-4">1. Gib hierzu im Terminal (PuTTY) folgendes ein:</p>
      <p className="ml-4">git clone https://github.com/BlackBeard085/x1console.git && cd x1console</p>
      <p className="ml-4">2. Sobald die Kopie erstellt ist, kannst du die X1 Console auf deinem Server installieren mit dem folgenden Befehl:</p>
      <p className="ml-4">./x1console.sh</p>
      <p className="ml-4">3. Es dauert ca. 30 Sekunden bis du nach dem Passwort gefragt wirst. Gibt das Passwort ein, das du festgelegt hattest, um auf den Server zuzugreifen.</p>
      <img src={Validator01} alt={`Test1`} className="mt-4 w-[800px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">Nach der Installation der Console, wird diese automatisch ausgeführt. Drücke einmal enter und dann solltest du das gleiche Fenster angezeigt bekommen wie unten im Bild.</p>
      <p className="ml-4">1. Tippe "10" ein, um das Menü "Other" anzuwählen und bestätige mit Enter.</p>
      <img src={Validator02} alt={`Test1`} className="mt-4 w-[800px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">Nun fangen wir an den Validator zu installieren.</p>
      <p className="ml-4">1. Wähle hierzu das Menü 1 aus.</p>
      <img src={Validator03} alt={`Test1`} className="mt-4 w-[600px] h-auto rounded-md shadow-sm"  />
      <img src={Validator04} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">Hin und wieder erscheint ein rosaner Bildschirm. In so einem Fall einfach die Taste Enter drücken.</p>
      <img src={Validator05} alt={`Test1`} className="mt-4 w-[600px] h-auto rounded-md shadow-sm"  />
      <img src={Validator06} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <img src={Validator07} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <img src={Validator08} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <img src={Validator09} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />

    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_4.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_4;