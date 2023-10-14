import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: Apple SD Gothic Neo;
  }

	#root {
		width: 100vw;
		height: 100vh;
		/* overflow-x: hidden; */
		/* overflow-y: hidden; */
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