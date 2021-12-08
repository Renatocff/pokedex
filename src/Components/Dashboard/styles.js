import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    input {
        padding: 10px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
`;

export const Pesquisa = styled.input`
    
    width: 400px;
    margin-top: 5px;
    padding: 10px;

    border-radius: 5px;
    border: 1px solid #CCC;
`;

export const Loader = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
`;