import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
        html {
            font-size : 62.5%;

            * {
                margin: 0;
                padding : 0;
                box-sizing : border-box;
            }

            body {
                font-family: 'Roboto', sans-serif;
            
                h1 {
                    font-size : 2rem;
                }

                h2 {
                    font-size : 1.8rem;
                }

                h3 {
                    font-size : 1.6rem;
                    
                }
                
                p {
                    font-size :  1.5rem;
                }
            }
        }


`;

export default GLobalStyle;
