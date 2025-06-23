import BlogHome_1 from "./BlogHome_1.jsx";
import BlogPostInvestorCard from "./BlogPost/BlogPostInvestor_1.jsx";
import { useNavigate } from "react-router-dom";

const BlogHome = () => {
  const navigate = useNavigate();

  const handleButtonClickInvestor = () => {
    navigate("/blog/investor");
  };

  return (
    <div className="">
      <BlogHome_1 />
      <BlogPostInvestorCard />
    </div>
  );
};

export default BlogHome;
