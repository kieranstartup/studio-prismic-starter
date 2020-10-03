import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";

const Index = ({ data }) => {
  return (
    <>
      <h1>{data.prismicPage.data.title}</h1>
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
        title
        body {
          html
        }
      }
    }
  }
`;
