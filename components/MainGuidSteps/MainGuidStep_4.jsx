import { useTranslation, Trans } from "react-i18next";
import GuidStepTemplate from "../GuidStepTemplate/GuidStepTemplate.jsx";
import Validator01 from "./Pictures/Validator/validator_01.jpg";
import Validator02 from "./Pictures/Validator/validator_02.jpg";
import Validator03 from "./Pictures/Validator/validator_03.jpg";
import Validator04 from "./Pictures/Validator/validator_04.jpg";
import Validator05 from "./Pictures/Validator/validator_05.jpg";
import Validator06 from "./Pictures/Validator/validator_06.jpg";
import Validator07 from "./Pictures/Validator/validator_07.jpg";
import Validator08 from "./Pictures/Validator/validator_08.jpg";
import Validator09 from "./Pictures/Validator/validator_09.jpg";
import Validator10 from "./Pictures/Validator/validator_10.jpg";
import Validator11 from "./Pictures/Validator/validator_11.jpg";
import Validator12 from "./Pictures/Validator/validator_12.jpg";
import Validator13 from "./Pictures/Validator/validator_13.jpg";
import Validator14 from "./Pictures/Validator/validator_14.jpg";
import DonateButton from "../Buttons/DonateButton.jsx";
import { Suspense } from "react";

const MainGuidStep_4 = ({ id, language }) => {
  const { t } = useTranslation("mainGuidSteps");

  return (
    <div id={id} className="">
      <GuidStepTemplate
        id={id}
        title={t("step4.title")}
        description={t("step4.description")}
      />
      <p className="ml-4">
        <Trans
          i18nKey="mainGuidSteps:step4.p01"
          components={{
            telegramLink: (
              <a
                href="https://github.com/BlackBeard085/x1console"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        />
      </p>

      <p className="ml-4">{t("step4.p02")}</p>
      <p className="ml-4">{t("step4.p03")}</p>
      <p className="ml-4">{t("step4.p04")}</p>
      <p className="ml-4">{t("step4.p05")}</p>
      <p className="ml-4">{t("step4.p06")}</p>
      <img
        src={Validator01}
        alt={`Validator 1`}
        className="mt-4 w-[800px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p07")}</p>
      <p className="ml-4">{t("step4.p08")}</p>
      <img
        src={Validator02}
        alt={`Validator 2`}
        className="mt-4 w-[800px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p09")}</p>
      <p className="ml-4">{t("step4.p10")}</p>
      <img
        src={Validator03}
        alt={`Validator 3`}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator04}
        alt={`Validator 4`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p11")}</p>
      <img
        src={Validator05}
        alt={`Validator 5`}
        className="mt-4 w-[600px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator06}
        alt={`Validator 6`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator07}
        alt={`Validator 7`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator08}
        alt={`Validator 8`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator09}
        alt={`Validator 9`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">{t("step4.p12")}</p>
      <p className="ml-4">{t("step4.p13")}</p>
      <p className="ml-4">
        2. Sobald du dir deine Seed-Phrasen zu den jeweiligen Wallets notiert
        hast, benötigt deine 'id' Wallet XNT. Gehe hierzu auf die{" "}
        <a
          href="https://faucet.testnet.x1.xyz/"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faucet-Webseite
        </a>
        .
      </p>
      <p className="ml-4">
        Sollte das Faucet leer sein, gibt es noch die Option, in der{" "}
        <a
          href="https://t.me/+yT0VAcNPFqM3OGQ0"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Validator Telegram Gruppe
        </a>{" "}
        darum zu bitten, dass dir XNT zugesendet wird. Schreibe hierzu einfach
        in den Chat deine Pubkey/Adresse von der ID Wallet und bitte um XNT.
      </p>
      <p className="ml-4">
        Alternativ kannst du mich auch direkt kontaktieren in der
        Telegram-Gruppe{" "}
        <a
          href="https://t.me/X1BlockchainGuide"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          X1BlockchainGuide
        </a>
        .
      </p>
      <p className="ml-4">
        Drücke die Taste Enter und fahre mit der Installation fort. Die
        Installation kannst du auch ohne XNT abschließen.
      </p>
      <img
        src={Validator10}
        alt={`Validator 10`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">
        Sobald die Installation abgeschlossen ist, müssen wir die
        PATH-Änderungen durchführen. Hierzu beenden wir das dargestellte Menü
        und die X1 Console.
      </p>
      <img
        src={Validator11}
        alt={`Validator 11`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <img
        src={Validator12}
        alt={`Validator 12`}
        className="mt-4 w-[400px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">
        1. Anschließend geben wir folgenden Code im Terminal ein:
      </p>
      <p className="ml-4">
        export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
      </p>
      <p className="ml-4">
        2. Wir können nun die X1 Console wieder mit dem folgenden Befehl im
        Terminal öffnen:
      </p>
      <p className="ml-4">./x1console.sh</p>
      <p className="ml-4">
        Wenn du den Schritt nicht übersprungen hast, dir XNT vom Faucet zu
        besorgen oder über Telegram, dann sollte bei dir der Status 'Active'
        sein.
      </p>
      <p className="ml-4">
        Herzlichen Glückwunsch. Du hast es geschafft, dir deinen eigenen X1
        Blockchain Validator einzurichten.
      </p>
      <p className="ml-4">
        Solltest du den Schritt mit dem XNT übersprungen haben, dann schau dir
        das nächste Bild an.
      </p>
      <img
        src={Validator13}
        alt={`Validator 13`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <p className="ml-4">
        Wenn dein Status 'Delinquent' ist, dann benötigt deine ID Wallet
        mindestens 2 XNT. Ob du bereits die XNT vom Faucet oder einem User
        erhalten hast, kannst du unter '3. Check Balance' nachschauen.
      </p>
      <p className="ml-4">
        1. Sobald dir die XNT zur Verfügung stehen, wähle 'Health Check and
        Start Validator' aus. Nach dem Health Check sollte dein Validator den
        Status 'Active' haben.
      </p>
      <p className="ml-4">
        Solltest du das Terminal schließen, dann kannst du auf die X1 Console,
        nach dem Login auf deinen Server, mit folgendem Befehl zugreifen:
      </p>
      <p className="ml-4">cd x1console && ./x1console.sh</p>
      <img
        src={Validator14}
        alt={`Validator 14`}
        className="mt-4 w-[900px] h-auto rounded-md shadow-sm"
      />
      <h2 className="ml-4">
        Solltest du das Terminal schließen, kannst du nach dem Login auf deinen
        Server mit dem folgenden Befehl auf die X1 Console zugreifen:
      </h2>
      <DonateButton />
    </div>
  );
};

// Statische Methode, um den Titel abzurufen
MainGuidStep_4.getTitle = (language) => {
  const { t } = useTranslation("mainGuidSteps");
  return t("step4.title");
};

export default MainGuidStep_4;
