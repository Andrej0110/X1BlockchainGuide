import { useTranslation } from 'react-i18next';
import PictureGermanyForButton from "./PictureGermanyForButton.jsx";
import PictureAmericaForButton from "./PictureAmericaForButton.jsx";

const LanguageButtons = ({language, setLanguage}) => {
	const { i18n } = useTranslation();

  	const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Ändert die Sprache in i18next
    setLanguage(lang); // Synchronisiert die language-State
  };

	return (
		<div className="mb-6">
        	<div className="mb-4">
		        <button
		          onClick={() => setLanguage("de")}
		          className={`mr-2 px-3 py-1 rounded 
		          ${language === "de" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
		        >
		          <PictureGermanyForButton />
		        </button>
		        <button
		          onClick={() => setLanguage("en")}
		          className={`px-3 py-1 rounded 
		          ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
		        >
		          <PictureAmericaForButton />
		        </button>
		      </div>
      </div>
	);
}


export default LanguageButtons;