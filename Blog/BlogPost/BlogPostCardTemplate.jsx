import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

const BlogPostCardTemplate = () => {
  return (
    <div>
      <Tilt options={{ max: 55 }} style={{ height: 48, width: 200 }}>
        <div className="img">
          <h1>Investoren</h1>
          <p>Was wissen wir über die bisherigen Investoren?</p>
        </div>
      </Tilt>
    </div>
  );
};

export default BlogPostCardTemplate;
