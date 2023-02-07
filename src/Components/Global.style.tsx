import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif; 
        
    }
    #root{
        margin:0 auto;
    }
    body{margin:0;
        height: 100vh;
    }

    h1{
    
    color:white;
    font-weight:700;
    font-size: 54px;
    line-height: 65px;
    margin-bottom: 24px;

}
 `;
