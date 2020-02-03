import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0;

  line-height: 20px;

  & ul {
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & ul,
  & li {
    list-style: none;
  }

  & li {
    padding-right: 20px;
    &:last-of-type {
      padding-right: 0;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <ul>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer"></a>
      </li>
    </ul>
  </FooterWrapper>
)

export default Footer
