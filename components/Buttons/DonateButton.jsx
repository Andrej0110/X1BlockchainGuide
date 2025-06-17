import { useTranslation, Trans } from "react-i18next";

const DonateButton = () => {
  const paypalMeLink = "https://www.paypal.me/AndrejWW";
  const { t } = useTranslation("button");

  const handleClick = () => {
    window.open(paypalMeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="" onClick={handleClick}>
      <button className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
        <span>{t("donateButton")}</span>
      </button>
      <div className=""></div>
    </div>
  );
};

export default DonateButton;
