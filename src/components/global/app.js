import React, { useState } from "react"
import styled from "styled-components"

// Components
import Header from "./header"
import Footer from "./footer"

const Main = styled.main`
  flex: 1;
`

const App = ({ location, data, children }) => {
  return (
    <PageTitleProvider>
      <PageTitleConsumer>
        {({ pageTitle }) => (
          <>
            <Header location={location} pageTitle={pageTitle} />
            <Main>{children}</Main>
            {location.pathname !== "/" && <Footer location={location} />}
          </>
        )}
      </PageTitleConsumer>
    </PageTitleProvider>
  )
}

export default App
