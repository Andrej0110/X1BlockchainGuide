import BlogHome_1 from "./BlogHome_1.jsx";
import BlogPostCardInvestor from "./BlogPost/BlogPostInvestor_1.jsx";
import { useNavigate } from "react-router-dom";

const BlogHome = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      <BlogHome_1 />
      <BlogPostCardInvestor />
    </div>
  );
};

export default BlogHome;