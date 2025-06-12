import FlagofAmerica from "./Pictures/Flag_of_the_United_States.svg.png";

const PictureAmericaForButton = ({size = 24, ...props} ) => {

  return (
    <img
      src={FlagofAmerica}
      alt="America Flag"
      width={size}
      height={size * (10 / 19)} // Verhältnis der Flagge (10:19)
      {...props}
    />
  );
};

export default PictureAmericaForButton;
