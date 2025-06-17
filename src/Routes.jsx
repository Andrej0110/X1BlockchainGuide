import { Routes, Route } from "react-router-dom";
import X1LandingPage from "./X1LandingPage.jsx";
import App from "./App.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<X1LandingPage />} /> {/* Root-Pfad */}
      <Route path="/ValidatorGuide" element={<App />} /> {/* Unterpfad ohne /X1BlockchainGuide/ */}
    </Routes>
  );
}

export default AppRoutes;