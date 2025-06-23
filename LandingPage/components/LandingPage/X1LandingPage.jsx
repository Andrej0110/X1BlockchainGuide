import { useNavigate } from "react-router-dom";
import ButtonValidator from "../Buttons/ButtonValidator.jsx";
import ButtonBlog from "../Buttons/ButtonBlog.jsx";
import "./X1LandingPage.css";

function X1LandingPage() {
  const navigate = useNavigate();

  const handleButtonClickValidator = () => {
    navigate("/ValidatorGuide");
  };

  const handleButtonClickBlog = () => {
    navigate("/X1Updates");
  };

  return (
    <div className="landing-page">
      <div className="text-container">
        <h1>X1 Blockchain</h1>
        <p>Decentralization Simplified</p>
      </div>
      <ButtonValidator onClick={handleButtonClickValidator} />
      <ButtonBlog onClick={handleButtonClickBlog} />
    </div>
  );
}

export default X1LandingPage;
