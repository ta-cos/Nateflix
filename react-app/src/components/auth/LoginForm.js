import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import { SplashContainer } from '../Splash/SplashElements';

const LoginForm = () => {

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else history.push('/profiles')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <SplashContainer />
      <div className='form-container'>
        <form onSubmit={onLogin}>
          <h1 className='form-header'>Log In</h1>
          <div className='errors-div'>
            {errors?.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div >
            <input
              className='form-input'
              name='email'
              type='eamil'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required={true}

            />
          </div>
          <div>
            <input
              className='form-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required={true}

            />
          </div>
          <button className='form-submit' type='submit'>Login</button>

          <p className='form-change'>New to NATEFLIX? <Link to="/sign-up/Email">Sign up now.</Link></p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
