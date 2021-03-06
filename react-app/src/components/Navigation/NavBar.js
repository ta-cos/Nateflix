
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { login, logout } from '../../store/session';
import { NavbarWrapper, ButtonWrapper, DemoButton, NavbarLogo, ProfileContent, NavbarContent, SearchBar, SearchDiv } from './NavbarElements'
import ProfileButton from '../ProfileButton/ProfileButton';
import logo from '../../images/nateflix-red.png'
import { useEffect, useState } from 'react';


const Navbar = ({ searchTerm, setSearchTerm }) => {

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.session.user)


  const handleDemo = async () => {
    let email = 'nate@nateflix.com', password = 'password';
    await dispatch(login(email, password));
    history.push('/profiles')
  }

  const handleSearch = async () => {
    console.log(searchTerm)
    history.push('/search')
  }

  return (
    <NavbarWrapper>
      <NavLink to='/profiles'><img src={logo} alt="Logo" /> </NavLink>
      {path !== '/profiles' ?
        <>
          <ButtonWrapper>
            {user ? null : <NavLink id='login' to='/login'> Log In </NavLink>}
            {user ? null : <DemoButton onClick={handleDemo}> Demo </DemoButton>}
          </ButtonWrapper>
          <ProfileContent>
            <ProfileButton />
          </ProfileContent>
        </>
        : null}

      {path === '/browse' ?
        <SearchDiv>
          <SearchBar value={searchTerm} placeholder='Search...' onChange={e => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>?</button>
        </SearchDiv>
        :
        null
      }
    </NavbarWrapper>
  );
}

export default Navbar;
