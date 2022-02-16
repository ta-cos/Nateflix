import React from 'react'
import { SplashContainer, SplashContenet } from './SplashElements'
import { useHistory } from 'react-router-dom'

const Splash = () => {

  const history = useHistory()

  const handleGetStarted = (e) => {
    e.preventDefault()
    console.log("HELLO")
}
return (
  <>
    <SplashContainer />
    <SplashContenet>
      <h1>Unlimited movies, TV <br /> shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime. </h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <form>
        <input placeholder='     Email Address'></input>
        <button onClick={handleGetStarted} type='submit' >Get Started </button>
      </form>
    </SplashContenet>
  </>
)
}

export default Splash
