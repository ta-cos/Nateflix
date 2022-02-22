import styled from "styled-components";

export const ProfileMenuBtn = styled.button`
    background: transparent;
    border: none;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 50px;
    padding: 0;
    margin-right: 0px;

    &:hover{
        color: #E50914;
    }
`

export const ProfileDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: ease-in-out;
    background-color: #000;
    border-radius: 4px;
    padding: 10px;

    p{
        color: white;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
        color: white;
        margin-bottom: 20px;
    }

    a:hover{
        color: #E50914;
    }

    button{
        border: none;
        border-radius: 4px;
        margin-bottom: 20px;
        background-color: #E50914;
        color: white;
        font-size: 16px;
        padding: 5px;
        align-self: center;
    }


`

export const ProfileImgButton = styled.button`
    
`
