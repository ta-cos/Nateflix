import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { signUp } from '../../store/session';
import { SplashContainer } from '../Splash/SplashElements';
import './SignUpForm.css'

const SignUpForm = () => {

  const initalEmail = useParams()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState(initalEmail.email);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password));
      if (data) {
        setErrors(data)
      } else history.push('/profiles')
    } else {
      setErrors(['Passwords need to match'])
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <SplashContainer />
      <div className='form-container'>
        <form onSubmit={onSignUp}>
          <h1 className='form-header'>Sign Up</h1>
          <div className='errors-div'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              className='form-input'
              placeholder='Email'
              type='email'
              name='email'
              required={true}
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              className='form-input'
              placeholder='Password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              required={true}
            ></input>
          </div>
          <div>
            <input
              className='form-input'
              placeholder='Confirm Password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className='form-submit' type='submit'>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
