import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 320px;

    /* padding: 10px; */
    margin-top: 20px;
    margin-left: 15px;
    border-radius: 5px;
    border: 1px solid #fff;
    box-shadow: 0px 1px 7px 4px rgba(191,191,191,0.77);

    background-color: #7fb781;
`;

export const Header = styled.div`

    /* display: inline-block; */

    img {
        width: 150px;
        margin-top: 10px;
        margin-left: 20px;
    }

    h4 {
        margin-left: 55%;
        margin-top: -35%;
    }

    h3 {
        margin-left: 55%;
        margin-bottom: 10px;
        color: #fff;
        font-weight: bold;
    }

    div {
        margin-left: 52%;
        
        strong {

            font-size: 14px;

            background-color: #fff;            
            padding: 2px;
            border-radius: 3px;

           &:last-child {
                margin-left: 5px;
           }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 168px;
    margin-top: 22px;

    background-color: #fff;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h3 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h5 {
        margin-top: 5px;
    }
`;

