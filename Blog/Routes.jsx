import { Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} /> {/* Root-Pfad */}
      <Route path="/X1News" element={<App />} />{" "}
      {/* Unterpfad ohne /X1BlockchainGuide/ */}
    </Routes>
  );
}

export default AppRoutes;
