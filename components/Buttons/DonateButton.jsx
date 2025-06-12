import { useTranslation, Trans } from "react-i18next";

const DonateButton = () => {
  const paypalMeLink = "https://www.paypal.me/AndrejWW";
  const { t } = useTranslation("button");

  return (
    <a
      href={paypalMeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    >
      {t("donateButton")}
    </a>
  );
};

export default DonateButton;
