import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";

const Index = ({ data }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicPage.data.title.html,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicPage.data.body.html,
        }}
      />
    </>
  );
};

export default withPreview(Index);

export const query = graphql`
  query($id: String!) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          html
        }
        body {
          html
        }
      }
    }
  }
`;
