import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";

const Template = ({ data }) => {
  return (
    <>
      <h1>Template</h1>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.prismicPage.data.title.html,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicPage.data.body.html,
        }}
      /> */}
    </>
  );
};

export default withPreview(Template);

// export const query = graphql`
//   query($uid: String!) {
//     prismicPage(uid: { eq: $uid }) {
//       data {
//         title {
//           html
//         }
//         body {
//           html
//         }
//       }
//     }
//   }
// `;
