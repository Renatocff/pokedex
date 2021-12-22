import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

export const containerSize = Object.freeze({
    height_normal: '210px',
    height_opened: '410px',
});

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 378px;
    height: ${({ size }) => size};
    margin-top: 10px;
    margin-left: 2px;

    background: linear-gradient(0deg, rgba(var(${({ background }) => background}), 0.8), rgba(var(${({ background }) => background}), 0.8)), url(${bg});
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    transition: height 1.2s;
`;

export const Cabecalho = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 10%;
    margin-left: 7%;
`;

export const Number = styled.h4`
    margin-left: 7%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #5E5757;
`;

export const Name = styled.h3`
    height: 28px;
    margin-left: 10%;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
`;

export const Type = styled.div`
    display: flex;
    margin-top: 10%;
    margin-left: 10%;
`;

export const TypeStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
    padding-bottom: 2px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;
    
    background: rgba(var(${(props) => props.color}), 0.8);  //rgba(255, 255, 255, 0.1);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px; 

    &:not(:first-child) {
        margin-left: 10px;
    }

    img {
        width: 20px;
    }
`;

export const ImgPokemon = styled.img`
    margin: auto auto;
    width: 130px;
    height: 139px;
    /* margin-left: 15%; */
`;

export const Details = styled.div`
    margin: 0px auto;
    width: 99%;
    height: ${({ size }) => size === '410px' ? '240px' : '0px'};

    background: #FFF;
    border-radius: 10px;
    transition: visibility 0s, opacity 0.5s linear;
`;

export const DetailsButton = styled.button`
    margin-bottom: 5px;
    border: none;
    background: transparent;

    margin-left: 50%;
`;

export const Loader = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;

export const Description = styled.h3`
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    height: 70px;

    color: #B8B4B4;
`;

export const BodyDetaisTitle = styled.h3`
    margin-top: 10px;
    margin-bottom: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;

    color: #3EC674;
`;

export const DetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    height: 60%;
`;

export const LineBodyItem = styled.h3`
    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;

    color: #000000;

    span {
        margin-left: 15px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        /* identical to box height */

        text-align: center;

        color: #B8B4B4;
    }
`;

