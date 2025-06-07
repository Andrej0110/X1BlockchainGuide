import WslGuidStep_1 from './WslGuidStep_1.jsx';
import WslGuidStep_2 from './WslGuidStep_2.jsx';

const WslGuidSteps = ({ language, activeTab, setActiveTab  }) => {

	return (
		<div className="">
			<h1 className="text-2xl font-semibold ml-2 p-2">Einrichten eines Fernzugriffes</h1>
			<p className="ml-4">PuTTY ermöglicht es, sich über SSH (Secure Shell) sicher mit entfernten Linux-Servern oder anderen Geräten zu verbinden, um sie zu verwalten oder Befehle auszuführen. Wir werden das Programm nutzen, um auf dem Server den X1 Blockchain Validator einzurichten."</p>
			<p className="ml-4"> Gehe hierzu auf die Webseite von {' '}
				<a href="https://www.putty.org/" 
					className="text-blue-600 hover:text-blue-800  hover:underline transition-colors duration-200" target="_blank">
					PuTTY
				</a>.
			</p>
	      <WslGuidStep_1 language={language}/>
	      <WslGuidStep_2 
	      	language={language}
	      	activeTab={activeTab}
       		setActiveTab={setActiveTab}
	      />
		</div>
	);
}

export default WslGuidSteps;
