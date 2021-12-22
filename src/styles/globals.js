import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --steel: 114, 131, 141;
        --water: 0, 80, 184;
        --dragon: 186, 169, 70;
        --electric: 248, 239, 127;
        --fairy: 255, 59, 161;
        --ghost: 82, 2, 3;
        --fire: 233, 11, 22;
        --ice: 70, 218, 250;
        --bug: 62, 198, 116;
        --fighting: 141, 48, 0;
        --normal: 190, 190, 190;
        --rock: 145, 128, 108;
        --grass: 33, 174, 54;
        --psychic: 101, 10, 180;
        --dark: 32, 49, 92;
        --ground: 244, 163, 32;
        --poison: 266, 84, 126;
        --flying: 51, 232, 229;
        --unavailable: 255, 230, 230;
    }
    
    * { // Regra para todos os elementos
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px; padrao do navegador
    // calculo usado em % para (telas 1080px) = 16 * 0.9375% = 15;
    // calculo usado em % para (telas 720px) = 16 * 0.9375% = 14;

    html {
        @media (max-width: 1080px){ // Quanto usuario estiver em uma tela ate 1080px de largura
            font-size: 93.75%; //15px
        }

        @media (max-width: 728px){ // Quanto usuario estiver em uma tela ate 728px de largura
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, :-ms-input-placeholder, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
      
`;