import React, { useState } from "react";
import styled from "styled-components";

// Components
import { Header } from "./header";
import { Footer } from "./footer";

const Main = styled.main`
  flex: 1;
`;

export const App = ({ location, data, children }) => {
  return (
    <>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer location={location} />
    </>
  );
};
