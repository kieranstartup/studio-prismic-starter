import React from "react";
import { Location } from "@reach/router";
import styled from "styled-components";
import { Normalize } from "styled-normalize";

// Styles
import GlobalStyles from "../styles/globalStyles";

// Components
import { App } from "./app";
import { DefaultSEO } from "./default-seo";

const Container = styled.div`
  position: relative;

  display: flex;
  min-height: 100vh;
  flex-direction: column;

  width: 100%;
`;


const Layout = ({ children }) => (

    <Location>
      {({ location }) => {
        return (
          <Container location={location.pathname}>
            <Normalize />
            <GlobalStyles />
            <DefaultSEO />
            <App location={location.pathname} children={children} />
          </Container>
        );
      }}
    </Location>

);

export default Layout;
