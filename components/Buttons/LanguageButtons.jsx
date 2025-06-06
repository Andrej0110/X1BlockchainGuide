const LanguageButtons = ({language, setLanguage}) => {
	return (
		<div className="mb-6">
        	<div className="mb-4">
		        <button
		          onClick={() => setLanguage("de")}
		          className={`mr-2 px-3 py-1 rounded 
		          ${language === "de" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
		        >
		          DE
		        </button>
		        <button
		          onClick={() => setLanguage("en")}
		          className={`px-3 py-1 rounded 
		          ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
		        >
		          EN
		        </button>
		      </div>
      </div>
	);
}


export default LanguageButtons;