import { useTranslation } from "react-i18next";
import BlogPostCardTemplate from "./BlogPostCardTemplate.jsx";
import ImageInvestors from "./Investors_X1Blockchain.webp";

const BlogPostInvestor_1 = ({}) => {
  return (
    <div className="">
      <BlogPostCardTemplate
        title="Investors"
        description="Was wissen wir über die bisherigen Investoren und welchen Vorteil bringen Sie für die X1 Blockchain?"
        image={ImageInvestors}
        link="/X1Updates/Investors"
      />
    </div>
  );
};

export default BlogPostInvestor_1;
