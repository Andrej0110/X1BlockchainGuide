import GuidStepTemplate from '../GuidStepTemplate/GuidStepTemplate.jsx';
import PuttyAddUser01 from './Pictures/Add_User/PuttyAddUser_01.jpg';
import PuttyAddUser02 from './Pictures/Add_User/PuttyAddUser_02.jpg';
import PuttyAddUser03 from './Pictures/Add_User/PuttyAddUser_03.jpg';
import PuttyAddUser05 from './Pictures/Add_User/PuttyAddUser_05.jpg';
import PuttyAddUser06 from './Pictures/Add_User/PuttyAddUser_06.jpg';

const content = {
  en: {
    title: "Step 3: Connect to Server and add User ",
    description: "Adjust the configuration files.",
    imageCaption: "Test",

  },
  de: {
    title: "Schritt 3: Mit Server verbinden und neuen Benutzer anlegen",
    description: "Öffne dein PuTTY Programm und gib dort die IP Adresse von dem Server ein.",
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
        image={PuttyAddUser01}
        imageClassName="mt-4 w-[600px] h-auto rounded-md shadow-sm"
        imageCaption={content[language].imageCaption}
      />
      <p className="ml-4">Zuerst müssen wir uns mit dem Benutzernamen 'root' anmelden, um einen neuen Benutzernamen anlegen zu können. Wenn du der Schritt-für-Schritt-Anleitung unter 'Server mieten' gefolgt bist, gib das Passwort ein, das du bei InterServer festgelegt hast. Beachte bei der Eingabe in PuTTY, dass dir die Eingabe des Passworts nicht angezeigt wird! Tippe das Passwort ein und drücke Enter.</p>
      <img src={PuttyAddUser02} className="mt-4 w-[600px] h-auto rounded-md shadow-sm" />
      <p className="ml-4">Sobald wir uns auf den Server eingeloggt haben, legen wir einen neuen Benutzer an. Im Beispiel lege ich den Benutzer 'test' an. Unter diesem Benutzernamen werden wir in Schritt 4 den Validator einrichten.</p>
      <p className="ml-4">1. Verwende hierzu den Befehl: adduser yourusername</p>
      <p className="ml-4">2. Anschließend musst du für den neuen Benutzer ein Passwort vergeben.</p>
      <img src={PuttyAddUser03} className="mt-4 w-[600px] h-auto rounded-md shadow-sm" />
      <p className="ml-4">Als nächstes wirst du gefragt, ob du dem neuen Benutzer weitere Informationen hinterlegen möchtest.</p>
      <p className="ml-4">1. Einfach nur mehrmals Enter drücken</p>
      <p className="ml-4">2. Eingabe mit 'Y' bestättigen.</p>
      <p className="ml-4">Im nächsten Schritt erhält unser neuer Benutzer Administrationsrechte.</p>
      <p className="ml-4">3. sudo usermod -aG sudo yourusername</p>
      <p className="ml-4">Mit Enter bestätigen. Anschließend kannst du entweder PuTTY schließen oder 'exit' eingeben.</p>
      <img src={PuttyAddUser05} className="mt-4 w-[600px] h-auto rounded-md shadow-sm" />
      <p className="ml-4">Starte erneut PuTTY, gib deine IP-Adresse ein und verbinde dich mit dem Server.</p>
      <p className="ml-4">Melde dich mit dem neuen Benutzernamen an.</p>
      <p className="ml-4">Du siehst nun, dass du unter dem neuen Benutzernamen angemeldet bist. Unten im Bild ist es mit dem grünen Pfeil dargestellt.</p>
      <img src={PuttyAddUser06} className="mt-4 w-[600px] h-auto rounded-md shadow-sm" />
    </div>

  );
};

MainGuidStep_3.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_3;