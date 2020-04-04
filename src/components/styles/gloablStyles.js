import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Helvetica Neue", "Lucida Grande", sans-serif;
  font-weight: normal;
  font-style: normal;

  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.15px;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -webkit-tap-highlight-color: transparent;

  color: #000;
  margin: 0;

  word-break: break-word;
}

input {
  border-radius: 0;
}

h1,h2,h3,h4,h5{
  font-family: "Helvetica Neue", "Lucida Grande", sans-serif;
  font-weight: normal;

  margin: 0;
}


/* Title 1 */
h1{
  font-size: 50px;
  line-height: 50px;
  letter-spacing: 0.3px;
}

/* Title 2 */
h2 {
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

/* Heading 1 */
h3 {
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

/* Heading 2 */
h4 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;
}

/* Heading 3 */
h5 {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
}


/*--------------------------------------------------------------
  ## Media
  --------------------------------------------------------------*/

video,
img {
  width: 100%;
  margin: 0;

  display: block;
}

/*--------------------------------------------------------------
  ## Buttons
  --------------------------------------------------------------*/

  button{
    background-color: transparent;

    &:focus,
    &:hover{
      outline: none;
    }
  }

/*--------------------------------------------------------------
  ## Links
  --------------------------------------------------------------*/
a {
  color: inherit;
  text-decoration: none;

  position: relative;
}

a:visited {
  color: inherit;
}

a:hover,
a:focus,
a:active {
  color: inherit;
}

a:hover,
a:active,
a:focus {
  outline: 0;
}

/*--------------------------------------------------------------
  ## Text
  --------------------------------------------------------------*/

p {
  margin: 1em 0;
}

ul, li{
  list-style: none;
  padding: 0;
  margin: 0;
}

/*--------------------------------------------------------------
  ## Box Sizing / Layout
  --------------------------------------------------------------*/

div {
  box-sizing: border-box;
}

/*--------------------------------------------------------------
  ## Input Placeholders
  --------------------------------------------------------------*/

// ::-webkit-input-placeholder{
//     color: #000 !important;
//     font-family: 'MonumentGrotesk-Medium', 'Helvetica Neue', 'Lucida Grande',
//       sans-serif !important;
//     font-size: 24px !important;

//     @media (max-width: 500px) {
//       font-size: 19px !important;
//     }

// }
// ::-moz-placeholder{
//     color: #000 !important;
//     font-family: 'MonumentGrotesk-Medium', 'Helvetica Neue', 'Lucida Grande',
//       sans-serif !important;
//     font-size: 24px !important;

//     @media (max-width: 500px) {
//       font-size: 19px !important;
//     }

// }
// :-ms-input-placeholder{
//       color: #000 !important;
//     font-family: 'MonumentGrotesk-Medium', 'Helvetica Neue', 'Lucida Grande',
//       sans-serif !important;
//     font-size: 24px !important;

//     @media (max-width: 500px) {
//       font-size: 19px !important;
//     }

// }
// :-moz-placeholder {
//     color: #000 !important;
//     font-family: 'MonumentGrotesk-Medium', 'Helvetica Neue', 'Lucida Grande',
//       sans-serif !important;
//     font-size: 24px !important;

//     @media (max-width: 500px) {
//       font-size: 19px !important;
//     }

//   }
`;

export default GlobalStyle;
