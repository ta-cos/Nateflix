import React from 'react'
import { SplashContainer } from '../Splash/SplashElements'
import './index.css'

const NoPage = () => {
    return (
        <>
            <SplashContainer />
            <h1 className='no-page'>We are sorry, that page is not found</h1>
        </>
    )
}

export default NoPage
