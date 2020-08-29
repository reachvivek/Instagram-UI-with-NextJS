import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
}
  body {
    .swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float: left;
  width: 100%;
  position: relative;
}
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;
