import { Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome.jsx";
import BlogPostInvestor_2 from "./BlogPost/BlogPostInvestor_2.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} />
      <Route path="/blog/investor" element={<BlogPostInvestor_2 />} />
    </Routes>
  );
}

export default AppRoutes;
