import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    width: 100%;
    background-color: transparent;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    img{
        margin-left: 100px;
        width: 120px;
    }
`

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ButtonWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    margin-right: 50px;

    a{
        color: #fff;
        font-size: 24px;
        text-decoration: none;
    }

    a:hover{
        color: #E50914;
        cursor: pointer;
    }

    button:hover{
        color: #000;
        cursor: pointer;
    }
`
export const DemoButton = styled.button`
    border-radius: 5px;
    font-size: 16px;
    font-family: sans-serif;
    padding: 7px 17px;
    background-color: #E50914;
    border: none;
    color: white;
`
export const LogoutButton = styled.button`
    border-radius: 5px;
    font-size: 16px;
    font-family: sans-serif;
    padding: 7px 17px;
    background-color: #e50914;
    border: none;
    color: white;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 20px;
    right: 100px;
`

export const EmailContainer = styled.div`
    
`
