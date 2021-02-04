import React from "react";
import { Location } from "@reach/router";
import styled from "styled-components";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
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

const gridTheme = {
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 766,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 12.5,
  },
  col: {
    padding: 12.5,
  },
};

const Layout = ({ children }) => (
  <GridThemeProvider gridTheme={gridTheme}>
    <Location>
      {({ location }) => {
        return (
          <Container location={location.pathname}>
            <Normalize />
            <BaseCSS />
            <GlobalStyles />
            <DefaultSEO />
            <App location={location.pathname} children={children} />
          </Container>
        );
      }}
    </Location>
  </GridThemeProvider>
);

export default Layout;
