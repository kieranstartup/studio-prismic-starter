import * as React from "react";
import { withPreviewResolver } from "gatsby-source-prismic";

import { linkResolver } from "../linkResolver";

const PreviewPage = ({ isPreview, isLoading }) => {
  if (isPreview === false) return "Not a preview!";

  return (
    <>
      <p>Loading</p>
    </>
  );
};

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver,
});
