import styled from 'styled-components';

export const Container = styled.div`
    .ash {
        display: flex;
        index: 1;

        margin-top: -240px;
        margin-left: 75%;
        width: 100px;
    }
`;

export const Background = styled.img`
    width: 100%;
    height: 300px;
`;

export const ButtonPokebola = styled.button`
    display: flex;
    width: 100px;
    height: 50px;
    border: none;
    background: transparent;
    margin-left: 79.8%;
    margin-top: -260px;

    img {

        width: 30px;

        -webkit-animation:spin 2s linear infinite;
        -moz-animation:spin 2s linear infinite;
        animation:spin 1s linear infinite;

        @-moz-keyframes spin { 
            100% { -moz-transform: rotate(360deg); } 
        }

        @-webkit-keyframes spin { 
            100% { -webkit-transform: rotate(360deg); } 
        }

        @keyframes spin { 
            100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        }
    }
`;