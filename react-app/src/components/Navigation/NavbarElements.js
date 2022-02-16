import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    width: 100%;
    background-color: transparent;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavbarLogo = styled.div`
    width: 120px;
    text-align: center;
    color: #e50914;
    margin-left: 50px;

    img{
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
        color: #E50914;
        background-color: #fff;
        cursor: pointer;
    }
`
export const DemoButton = styled.button`
    border-radius: 5px;
    font-size: 16px;
    font-family: sans-serif;
    padding: 7px 17px;
    background-color: #e50914;
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
