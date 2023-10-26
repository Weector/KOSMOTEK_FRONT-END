import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;

}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  margin: 0px;
  
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: currentColor;
}

button {
  cursor: pointer;
  padding: 0;
  font-family:inherit;
}

`;

export default GlobalStyles;
