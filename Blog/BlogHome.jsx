import BlogHome_1 from "./BlogHome_1.jsx";
import BlogPostInvestorCard from "./BlogPost/BlogPostInvestor_1.jsx";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleButtonClickValidator = () => {
  navigate("/ValidatorGuide");
};

const BlogHome = () => {
  return (
    <div className="" id="main">
      <BlogHome_1 />
      <BlogPostInvestorCard />
    </div>
  );
};

export default BlogHome;
