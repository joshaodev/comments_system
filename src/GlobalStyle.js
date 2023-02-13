import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    button {
        padding: 10px 25px;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
`;
