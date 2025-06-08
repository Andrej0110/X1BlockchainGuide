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
import Validator10 from './Pictures/Validator/validator_10.jpg';
import Validator11 from './Pictures/Validator/validator_11.jpg';
import Validator12 from './Pictures/Validator/validator_12.jpg';
import Validator13 from './Pictures/Validator/validator_13.jpg';
import Validator14 from './Pictures/Validator/validator_14.jpg';
import DonateButton from '../Buttons/DonateButton.jsx';



const content = {
  en: {
    title: "Step 1: Set up server",
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
      <p className="ml-4">Jetzt bitte sehr gut aufpassen!</p>
      <p className="ml-4">1. Solltest du mal den Zugang zum Server verlieren, dann verlierst du auch den Zugang zu deiner Wallet. Um das zu vermeiden notiere dir die Seed Phrase jeder einzelnen Wallet - in Summe 4 Stück. Solltest du in deinem Terminal Fenster, so wie ich nur 2 Wallets sehen, dann scrolle einfach hoch. Die Adresse "pubkey" musst du nicht händisch abschreiben, weil du diese in der X1 Console jederzeit wiederfinden kannst.</p>
      <p className="ml-4">2. Sobald du dir deine Seed Phrasen zu den jeweiligen Wallets notiert hast, benötigt deine "id" Wallet XNT. Gehe hierzu auf die <a href="https://faucet.testnet.x1.xyz/" className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">Faucet</a> Webseite.  </p>
      <p className="ml-4">Sollte das Faucet leer sein, dann gibt es noch die Option in der <a href="https://t.me/+yT0VAcNPFqM3OGQ0" className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">Validator Telegram Gruppe</a> darum zu bitten, dass einem XNT zugesendet wird. Schreibe hierzu einfach in den Chat deine Pubkey/Adresse von der ID Wallet und bitte um XNT.</p>
      <p className="ml-4">Alternativ kannst du mich auch direkt kontaktieren über Telegram unter der Telegram Gruppe <a href="https://t.me/X1BlockchainGuide" className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">X1BlockchainGuide</a>.</p>
      <p className="ml-4">Drücke die Taste Enter und fahre fort mit der Installation. Die Installation kannst du auch abschließen ohne XNT.</p>
      <img src={Validator10} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">Sobald die Installation abgeschlossen ist, müssen wir die PATH Änderungen durchführen. Hierzu beenden wir das dargestellte Menü und Beeden die X1 Console.</p>
      <img src={Validator11} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <img src={Validator12} alt={`Test1`} className="mt-4 w-[400px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">1.Anschließend geben wir folgenden Code im Terminal ein:</p>
      <p className="ml-4">export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"</p>
      <p className="ml-4">2. Wir können nun wieder die X1 Console öffnen mit dem Befehl im Terminal:</p>
      <p className="ml-4">./x1console.sh</p>
      <p className="ml-4"> Wenn du den Schritt nicht übersprungen hast dir XNT vom Facuet zu besorgen oder über Telegram, dann sollte bei dir der Status: Active sein.</p>
      <p className="ml-4">Herzlichen Glückwunsch. Du hast es geschaft dir deinen eigenen X1 Blockchain Validator einzurichten.</p>
      <p className="ml-4">Solltest du den Schritt mit dem XNT übersprungen haben, dann schau dir das nächste Bild an.</p>
      <img src={Validator13} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <p className="ml-4">Wenn dein Status: Delinquent ist, dann benötigt deine ID Wallet mindestens 2 XNT. Ob du die XNT vom Faucet oder einem User erhalten hast, kannst du unter "3. Check Balance" nachschauen.</p>
      <p className="ml-4">1. Sobald dir die XNT zur Verfügung stehen, wähle "Health Check and Start Validator" aus. Nachdem Health Check sollte dein Validator den Status Active haben.</p>
      <p className="ml-4">Solltest du das Terminal schließen, dann kannst du auf die X1 Console, nach dem Loggin auf deinen Server, mit folgendem Befehl zugreifen:</p>
      <p className="ml-4">cd x1console && ./x1console.sh</p>
      <img src={Validator14} alt={`Test1`} className="mt-4 w-[900px] h-auto rounded-md shadow-sm"  />
      <h2 className="ml-4">Falls dir dieser Guide gefallen oder geholfen hat, freue ich mich über eine kleine Unterstützung durch eine Spende, um weitere Inhalte wie diesen zu erstellen.</h2>
      <DonateButton />
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_4.getTitle = (language) => content[language].title || content.en.title;

export default MainGuidStep_4;