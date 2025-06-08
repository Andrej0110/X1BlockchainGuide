const DonateButton = () => {
  // Ersetze 'DeinPayPalMeLink' mit deinem tatsächlichen PayPal.me-Link (z. B. https://www.paypal.me/DeinBenutzername)
  const paypalMeLink = 'https://www.paypal.me/AndrejWW';

  return (
    <a
      href={paypalMeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Spenden
    </a>
  );
};

export default DonateButton;