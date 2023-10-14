import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	#root {
		width: 100vw;
		height: 100vh;
	}

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;