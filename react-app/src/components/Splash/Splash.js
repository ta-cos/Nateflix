import React, { useState } from 'react'
import { SplashContainer, SplashContenet } from './SplashElements'
import { useHistory } from 'react-router-dom'

const Splash = () => {

  const history = useHistory()
  const [email, setEmail] = useState();

  const handleGetStarted = (e) => {
    e.preventDefault()
    history.push(`/sign-up/${email}`)
  }
  return (
    <>
      <SplashContainer />
      <SplashContenet>
        <h1>Unlimited movies, TV <br /> shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime. </h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form onSubmit={handleGetStarted}>
          <input placeholder='     Email Address' type='email' required={true}
            onChange={e => setEmail(e.target.value)}></input>
          <button type='submit' >Get Started </button>
        </form>
      </SplashContenet>
    </>
  )
}

export default Splash
