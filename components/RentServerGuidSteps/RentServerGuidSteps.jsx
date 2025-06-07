import RentServerGuidStep_1 from './RentServerGuidStep_1.jsx';
import RentServerGuidStep_2 from './RentServerGuidStep_2.jsx';
import RentServerGuidStep_3 from './RentServerGuidStep_3.jsx';
import RentServerGuidStep_4 from './RentServerGuidStep_4.jsx';
import RentServerGuidStep_5 from './RentServerGuidStep_5.jsx';
import RentServerGuidStep_6 from './RentServerGuidStep_6.jsx';
import RentServerGuidStep_7 from './RentServerGuidStep_7.jsx';


const RentServerGuidSteps = ({ language, activeTab, setActiveTab }) => {

	return (
		<div className="">
			<h1 className="text-2xl font-semibold ml-2 p-2">"Einrichten eines Servers"</h1>
			<p className="ml-4">"In dieser Anleitung zeige ich dir, welchen Server du wählen solltest, um die erforderliche Leistung für deinen Validator auszuwählen."</p>

			<p className="ml-4">In der Dokumentation von der{' '}
				<a href="https://docs.x1.xyz/validating/performance/hardware-requirements" 
					className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">
				X1 Blockchain</a> wird der Aniebter InterServer empfohlen. Gehe hierzu auf die Webseite{' '}
				<a href="https://www.interserver.net/r/1013595" 
					className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">
					InterServer</a> und folge anschließend der Schritt für Schritt Anweisung.</p>
	      <RentServerGuidStep_1 language={language}/>
	      <RentServerGuidStep_2 language={language}/>
	      <RentServerGuidStep_3 language={language}/>
	      <RentServerGuidStep_4 language={language}/>
	      <RentServerGuidStep_5 language={language}/>
	      <RentServerGuidStep_6 language={language}/>
	      <RentServerGuidStep_7 
	      	language={language}
	      	activeTab={activeTab}
       		setActiveTab={setActiveTab}
	      />
		</div>
	);
}

export default RentServerGuidSteps;
