import { useTranslation } from "react-i18next";
import BlogPostCardTemplate from "./BlogPostCardTemplate.jsx";
import Test from "./test_03.webp";

const BlogPostInvestor_1 = ({}) => {
  return (
    <div className="">
      <BlogPostCardTemplate
        title="Investoren"
        description="Was wissen wir über die bisherigen Investoren und welchen Vorteil bringen Sie für die X1 Blockchain?"
        image={Test}
      />
    </div>
  );
};

export default BlogPostInvestor_1;
