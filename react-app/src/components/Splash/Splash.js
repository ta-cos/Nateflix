import React from 'react'
import { SplashContainer, SplashContenet } from './SplashElements'

const Splash = () => {
  return (
    <>
      <SplashContainer />
      <SplashContenet>
        <h1>Unlimited movies, TV <br /> shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime. </h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div>
          <input placeholder='     Email Address'></input>
          <button>Get Started </button>
        </div>
      </SplashContenet>
    </>
  )
}

export default Splash
