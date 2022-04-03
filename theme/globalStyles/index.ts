import { createGlobalStyle } from "styled-components";
import reset from "../reset";

export const GlobalStyles = createGlobalStyle`
${reset};

html, body {
    font-family: 'Epilogue', sans-serif;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
}


`;
