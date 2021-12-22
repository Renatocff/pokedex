import styled from "styled-components";

export const Container = styled.div`
    margin-left: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));

    input {
        padding: 10px;
    }
`;

export const HeaderPesquisa = styled.div`
    display: flex;
    
    width: 50%;
    margin-left: 25vw;
    justify-content: center;
    margin-Top: 250px;
    border-radius: 5px;

    -webkit-box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.57); 
    box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.57);
`;

export const Pesquisa = styled.input`
    
    width: 100%;
    padding: 10px;
    padding: 8px;
    margin: 2px 2px;
    border: none;
    outline: none;
    background: rgba(255,255,255, 0.1);

    border-radius: 5px;
    -webkit-box-shadow: -1px;
`;

export const Loader = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
`;

export const More = styled.button`
    display: flex;
    background-color: #CCC;
    width: 150px;
    justify-content: center;
    
    margin-top: 20px;
    margin-left: 50%;
    margin-bottom: 10px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;

    &:hover {
        background-color: #fff;
    }
`;