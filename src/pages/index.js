import React from "react";
import { graphql } from "gatsby";
import usePreviewData from "./utils/usePreviewData";
import styled from "styled-components";

export const Index = ({ data }) => {
  const liveData = usePreviewData(data);

  return (
    <Layout>
      <h1>{liveData.prismicPage.data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: liveData.prismicPage.data.body.html,
        }}
      />
    </Layout>
  );
};

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
