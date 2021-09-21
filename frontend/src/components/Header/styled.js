import styled from "styled-components";

export const Container = styled.div`
    background-color: #009688;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Logo = styled.img`
    width: auto;
    height: 70px;
    


`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    background-image: url("/assets/search.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    font-size: 15px;
    transition: all ease 0.3s;

    cursor: pointer;

    &:focus {
        cursor: text;
    }
`;