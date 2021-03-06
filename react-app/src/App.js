import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Navbar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Splash from './components/Splash/Splash'
import Browse from './components/browse';
import SelectProfile from './components/SelectProfile';
import NoPage from './components/NoPage';
import Search from './components/search';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState();
  const [profileId, setProfileId] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  const getEmail = (email) => {
    setEmail(email)
  }

  const getProfileId = (profileId) => {
    setProfileId(profileId)
  }

  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm)
  }


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm passedEmail={email} />
        </Route>
        <ProtectedRoute path='/profiles' exact={true} >
          <SelectProfile getProfileId={getProfileId} />
        </ProtectedRoute>
        <ProtectedRoute path='/browse' exact={true} >
          <Browse profileId={profileId} />
        </ProtectedRoute>
        <ProtectedRoute path='/search'>
          <Search searchTerm={searchTerm} />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Splash getEmail={getEmail} />
        </Route>
        <Route>
          <NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
