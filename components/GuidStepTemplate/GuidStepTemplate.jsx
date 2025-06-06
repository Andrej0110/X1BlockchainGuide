
const GuidStepTemplate = ({ id, title, description, image, imageCaption, imageClassName }) => {
	
	const defaultImageClass = "mt-4 w-[900px] h-auto rounded-md shadow-sm";

	return (
		<div className="">
		  <div id={id} className="mb-6 p-4">
		      <h2 className="text-2xl font-semibold">{title}</h2>
		      <p className="mt-2">{description}</p>
		      {image && (
		          <img
		            src={image}
		            alt={title}
		            className={imageClassName || defaultImageClass} //default imageClassName or parameter imageClassName
		          />
		        )}
		      <p className="italic">{imageCaption}</p>
			 </div>
		</div>
	);
}


export default GuidStepTemplate;
