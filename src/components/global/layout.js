import React from "react"
import { Helmet } from "react-helmet"
import { Location } from "@reach/router"
import styled from "styled-components"
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid"
import { Normalize } from "styled-normalize"

import GlobalStyles from "../styles/globalStyles"
import App from "./app"
// import DefaultSEO from "./default-seo";

const Container = styled.div`
  position: relative;

  display: flex;
  min-height: 100vh;
  flex-direction: column;

  width: 100%;

  overflow: ${props => (props.location === "/" ? "hidden" : "")};
  height: ${props => (props.location === "/" ? "calc(100vh - 36px)" : "auto")};
`

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
}

export const Layout = ({ children }) => (
  <GridThemeProvider gridTheme={gridTheme}>
    <Location>
      {({ location }) => {
        return (
          <Container location={location.pathname}>
            <Normalize />
            <BaseCSS />
            <GlobalStyles />
            {/* <DefaultSEO location={location} data={data} /> */}
            <App location={location} children={children} />
          </Container>
        )
      }}
    </Location>
  </GridThemeProvider>
)

export default Layout
