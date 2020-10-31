import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";
import Media from "react-media";

// Components
import { DesktopMenu } from "../navigation/desktop-menu";
import { MobileMenu } from "../navigation/mobile-menu";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 20px;

  background-color: #fff;
  border-bottom: 1px solid #000;
  z-index: 200;

  @media (max-width: 768px) {
    padding: 0 10px;

    line-height: 35px;
  }
`;

export const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const [windowWidth, setWindowWidth] = useState(768);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      let getWindowWidth = window.innerWidth;
      setWindowWidth(getWindowWidth);
    }
  }, []);
  return (
    <HeaderWrapper>
      <Media
        queries={{ medium: "(max-width: 768px)" }}
        defaultMatches={{ medium: windowWidth === 768 }}
        render={() => (
          <MobileMenu
            links={data.site.siteMetadata.menuLinks}
            location={location.pathname}
          />
        )}
      />

      <Media
        queries={{ medium: "(min-width: 769px)" }}
        defaultMatches={{ medium: windowWidth === 769 }}
        render={() => (
          <DesktopMenu
            links={data.site.siteMetadata.menuLinks}
            location={location.pathname}
          />
        )}
      />
    </HeaderWrapper>
  );
};
