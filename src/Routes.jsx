// AppRoutes.jsx (unverändert)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import X1LandingPage from "../LandingPage/components/LandingPage/X1LandingPage.jsx";
import BlogPostInvestor from "../Blog/BlogPost/BlogPostInvestor.jsx";
import App from "./App.jsx";
import BlogHome from "../Blog/BlogHome.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<X1LandingPage />} />
        <Route path="/ValidatorGuide" element={<App />} />
        <Route path="/X1Updates" element={<BlogHome />} />
        <Route path="/X1Updates/Investors" element={<BlogPostInvestor />} />
        <Route path="*" element={<X1LandingPage />} /> {/* Fallback zur Root */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;