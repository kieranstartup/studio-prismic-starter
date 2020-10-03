import * as React from "react";
import { withUnpublishedPreview } from "gatsby-source-prismic";

import { PageTemplate } from "../templates/PageTemplate";
import { BlogPostTemplate } from "../templates/BlogPostTemplate";

const NotFoundPage = () => (
  <>
    <h1>Page not found!</h1>
  </>
);

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    blog_post: BlogPostTemplate,
  },
});
