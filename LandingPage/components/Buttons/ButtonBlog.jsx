import "./ButtonBlog.css";

const ButtonBlog = ({ onClick }) => {
  return (
    <div className="buttonWrap" onClick={onClick}>
      <button className="button" onClick={onClick}>
        {" "}
        {/* onClick auch am Button */}
        <span>Explore X1 Updates</span>
      </button>
      <div className="buttonShadow"></div>
    </div>
  );
};

export default ButtonBlog;
