import { useNavigate } from "react-router-dom";
import ButtonLandingPage from "./ButtonLandingPage";
import "./X1LandingPage.css";

function X1LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/ValidatorGuide"); // Korrigierter Pfad
  };

  return (
    <div className="landing-page">
      <div className="text-container">
        <h1>X1 Blockchain</h1>
        <p>Decentralization Simplified</p>
      </div>
      <ButtonLandingPage onClick={handleButtonClick} />
    </div>
  );
}

export default X1LandingPage;




{/*
X1 Blockchain: Dezentralisierung, leicht gemacht
Starte durch – werde Validator!

X1 Blockchain
Decentralization Simplified
Launch Now – Become a Validator!


return (
    <div className="landing-page">
      <div className="text-container">
        <h1>X1 Blockchain</h1>
        <p>Decentralization Simplified</p>
      </div>
      <ButtonLandingPage onClick={handleButtonClick} />
    </div>
  );
}
*/}