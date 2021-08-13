import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased !important;
  }
`;