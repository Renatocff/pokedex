import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 727px;
    height: 634px;
    left: 29%;
    top: 50%;

    background: #FFFFFF;
    border-radius: 10px;
`;

export const Header = styled.div`
    width: 728px;
    height: 125px;
    left: 355px;
    top: 217px;

    background: #5E9BD2;
    border-radius: 10px 10px 0px 0px;
`;

export const Close = styled.button`
    margin-left: 95%;
    margin-top: 10px;
    width: 18px;
    height: 18px;
    border: none;
    background: transparent;
`;

export const BoxHeader = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 190px;
    height: 174px;

    top: 5%;
    left: 38%;

    background: #FFFFFF;
    border: 1px solid #CBCACA;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    img {
        width: 76px;
        height: 110px;
    }

    h4 {
        margin-top: 15px;
        color: #8D7F7F;
    }
`;

export const Card = styled.div`
    margin: 100px 5px;
    width: 345px;
    height: 392px;

    background: #FFFFFF;
    border: 1px solid #CBCACA;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    h4 {
        margin-top: 5px;
        margin-left: 37%;
        color: #8D7F7F;
    }
`;

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 10px;
    width: 95%;
    height: 41px;

    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    img {
        margin-left: 10px;
        border-radius: 50%;
        width: 34px;
        height: 32px;
    }

    h5 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */


        color: #B6ABAB;
    }

    button {
        margin-right: 10px;
        border: none;
        background: transparent;

        img {
            width: 20px;
            height: 20px;
        }
    }

    input {
        border: none;
        padding: 10px;
        outline: none;
    }
`;