import BlogHomeHeader from "./BlogHomeHeader.jsx";
import BlogPostCardInvestor from "./BlogCard/BlogCardInvestor.jsx";
import { useNavigate } from "react-router-dom";


const BlogHome = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      <BlogHomeHeader />
      <BlogPostCardInvestor />
   
    </div>
  );
};

export default BlogHome;

