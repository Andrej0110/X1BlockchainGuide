const GuidStepTemplate = ({
  id,
  headline,
  headlineParagraph_01,
  title,
  description,
  description_2,
  description_3,
  image,
  imageCaption,
  imageClassName,
  buttonText, // Neuer Prop für den Button-Text
  activeTab, // Neuer Prop für den aktuellen Tab
  setActiveTab, // Neuer Prop für die Tab-Wechsel-Funktion
  tabValue, // Neuer Prop für den Tab-Wert
}) => {
  const defaultImageClass = "mt-4 w-[900px] h-auto rounded-md shadow-sm";

  return (
    <div className="">
      <div id={id} className="mb-6 p-4">
      	<h1 className="text-2xl font-semibold ml-2 p-2">{headline}</h1>
      	<p className="mt-2">{headlineParagraph_01}</p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
        <p className="mt-2">{description_2}</p>

        {buttonText && setActiveTab && tabValue && (
          <button
            onClick={() => setActiveTab(tabValue)}
            className={`font-semibold ${
              activeTab === tabValue
                ? 'text-blue-600'
                : 'text-blue-600 hover:text-blue-800  hover:underline'
            }`}
          >
            {buttonText}
          </button>
        )}
        <p className="mt-2">{description_3}</p>
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