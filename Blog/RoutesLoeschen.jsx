import { Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome.jsx";
import BlogPostInvestor_2 from "./BlogPost/BlogPostInvestor_2.jsx";
import X1LandingPage from "../LandingPage/components/LandingPage/X1LandingPage.jsx";
import AppRoutesBlog from "../Blog/Routes.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<X1LandingPage />} />
      <Route path="/X1Updates" element={<BlogHome />} />
      <Route path="/X1Updates/Investor" element={<BlogPostInvestor_2 />} />
      {AppRoutesBlog && AppRoutesBlog.props.children}
     
    </Routes>
  );
}

export default AppRoutes;


{/*
 
*/}
