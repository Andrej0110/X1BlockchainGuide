import BlogPostCardTemplate from "./BlogCardTemplate.jsx";
import ImageInvestors from "../BlogCard/BlogCardInvestor.webp";

const BlogPostInvestor_1 = ({}) => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <BlogPostCardTemplate
        title="Investors"
        description="What do we know about the investors to date, and what advantages do they bring to the X1 blockchain?"
        image={ImageInvestors}
        link="/X1Updates/Investors"
      />
    </div>
  );
};

export default BlogPostInvestor_1;

{
  /*
Was wissen wir über die bisherigen Investoren und welchen Vorteil bringen Sie für die X1 Blockchain?
*/
}
