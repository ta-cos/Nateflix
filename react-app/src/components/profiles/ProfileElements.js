import styled from "styled-components";


export const ProfileContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProfileContent = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-around;

    color: white;
`

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    img{
        height: 200px;
        width: 200px;
        border-radius: 50%;
    }
`

export const ProfileButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 100px;
        border-radius: 4px;
        margin: 10px;
    }

    input:focus{
        outline: none;
        border: 2px solid #E50914;
        border-radius: 4px;

    }
`

export const ProfileButton = styled.button`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 200px;

    &:hover{
        color: #E50914;
    }
`
export const EditButton = styled.button`
    color: white;
    background: transparent;
    padding: 5px;

    &:hover{
        color: #E50914;
    }
`
export const DelButton = styled.button`
    color: white;
    background: transparent;
    padding: 5px;

    &:hover{
        color: red;
    }
`
