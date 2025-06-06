import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Tilt from 'react-parallax-tilt';
import Logo from '../components/Logo/x1Logo';
import MainGuidSteps from '../components/MainGuidSteps/MainGuidSteps.jsx';
import WslGuidSteps from '../components/WslGuidSteps/WslGuidSteps.jsx';
import RentServerGuidSteps from '../components/RentServerGuidSteps/RentServerGuidSteps.jsx';
import MenuButtons from '../components/Buttons/MenuButtons.jsx';
import LanguageButtons from '../components/Buttons/LanguageButtons.jsx';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('main');
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <h1 className="p-2 text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <Logo />
        X1 Validator Guide
      </h1>
      <h2>Möchtest du einen Validator für die X1 Blockchain einrichten? In dieser Anleitung zeigen wir dir Schritt für Schritt, wie du erfolgreich Teil des X1-Netzwerks wirst.</h2>
      <LanguageButtons language={language} setLanguage={setLanguage} />

      <MenuButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'main' && <MainGuidSteps language={language} />}
      {activeTab === 'wsl' && <WslGuidSteps language={language} />}
      {activeTab === 'rent' && <RentServerGuidSteps language={language} />}
    </div>
  );
}

export default App;