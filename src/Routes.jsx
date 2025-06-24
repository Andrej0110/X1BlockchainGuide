import { Routes, Route } from "react-router-dom";
import X1LandingPage from "../LandingPage/components/LandingPage/X1LandingPage.jsx";
import BlogPostInvestor_2 from "../Blog/BlogPost/BlogPostInvestor_2.jsx";
import App from "./App.jsx";
import BlogHome from "../Blog/BlogHome.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<X1LandingPage />} />
      <Route path="/ValidatorGuide" element={<App />} />{" "}
      <Route path="/X1Updates" element={<BlogHome />} />{" "}
      <Route path="/X1Updates/Investors" element={<BlogPostInvestor_2 />} />
    </Routes>
  );
}

export default AppRoutes;
