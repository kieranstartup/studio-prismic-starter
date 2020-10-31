import * as React from "react";
import { withUnpublishedPreview } from "gatsby-source-prismic";

import Index from "./index";

const NotFoundPage = () => (
  <>
    <h1>Page not found!</h1>
  </>
);

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    homepage: Index,
  },
});
