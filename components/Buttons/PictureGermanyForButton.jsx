import FlagofGermany from "./Pictures/Flag_of_Germany.svg.png";

const PictureGermanyForButton = ({size = 24, ...props} ) => {

  return (
    <img
      src={FlagofGermany}
      alt="Germany Flag"
      width={size}
      height={size * (10 / 19)} // Verhältnis der Flagge (10:19)
      {...props}
    />
  );
};

export default PictureGermanyForButton;
