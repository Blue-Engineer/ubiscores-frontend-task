import { createGlobalStyle } from "styled-components";
import reset from "../reset";

export const GlobalStyles = createGlobalStyle`
${reset};

html {
    font-family: 'Epilogue', sans-serif;
    scroll-behavior: smooth;
}


`;
