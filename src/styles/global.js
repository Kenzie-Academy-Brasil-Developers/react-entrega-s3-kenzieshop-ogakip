import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito";
}

body {
    background-color: #242331;
}

li {
    list-style: none;
}

button {
    cursor: pointer;
}
`;
export default GlobalStyles;
