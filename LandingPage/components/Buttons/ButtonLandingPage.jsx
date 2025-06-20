import "./ButtonLandingPage.css";

const ButtonLandingPage = ({ onClick }) => {
  return (
    <div className="buttonWrap" onClick={onClick}>
      <button className="button" onClick={onClick}>
        {" "}
        {/* onClick auch am Button */}
        <span>Become a Validator!</span>
      </button>
      <div className="buttonShadow"></div>
    </div>
  );
};

export default ButtonLandingPage;

("./ButtonLandingPage.css");
