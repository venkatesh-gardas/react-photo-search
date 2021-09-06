import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1000px;        
    }

    * {
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 10px;
        background-color: rgb(244, 244, 244);
        color: #333;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        

        h1 {
            font-size: 4.4rem;            
        }

        h2 {
            font-size: 3.4rem;            
        }
    }

`;

export default GlobalStyle;
