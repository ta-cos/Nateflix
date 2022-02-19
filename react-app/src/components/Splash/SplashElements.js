import styled from "styled-components";

export const SplashContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_large.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: -1;
    filter: brightness(50%);
`
export const SplashContenet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 7%;
    font-family: sans-serif;


    h1{
        font-size: 50px;
        margin-bottom: 0;
        font-weight: bold;
        text-align: center;
    }

    h2{
        margin-bottom: 0;
        font-size: 24px;
        font-weight: 100;
        padding-bottom: 2%;
    }

    h3{
        font-size: 19.2px;
        font-weight: 100;
    }

    form{
        display: flex;
        flex-direction: row;
    }

    input{
        border: 0;
        min-width: 450px;
        height: 60px;
    }

    button{
        background-color: #E50914;
        border: none;
        color: white;
        font-size: 1.625rem;
        min-height: 62px;
        padding: 0px 26px 0px 26px;
    }

    button:hover{
        color: #E50914;
        background-color: white;
    }
`
