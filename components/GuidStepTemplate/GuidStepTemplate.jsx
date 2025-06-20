const GuidStepTemplate = ({
  id,
  title,
  description,
  image,
  imageCaption,
  imageClassName,
  buttonText, // Neuer Prop für den Button-Text
  activeTab, // Neuer Prop für den aktuellen Tab
  setActiveTab, // Neuer Prop für die Tab-Wechsel-Funktion
  tabValue, // Neuer Prop für den Tab-Wert
}) => {
  const defaultImageClass = "w-[900px] img";

  return (
    <div className="">
      <div id={id} className="p-4 mt-6">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="">{description}</p>
        {buttonText && setActiveTab && tabValue && (
          <button
            onClick={() => setActiveTab(tabValue)}
            className={`font-semibold ${
              activeTab === tabValue ? "link" : "link"
            }`}
          >
            {buttonText}
          </button>
        )}

        {image && (
          <img
            src={image}
            alt={title}
            className={imageClassName || defaultImageClass}
          />
        )}
        <p className="italic">{imageCaption}</p>
      </div>
    </div>
  );
};

export default GuidStepTemplate;
