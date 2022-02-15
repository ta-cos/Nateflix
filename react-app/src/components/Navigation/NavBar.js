
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login, logout } from '../../store/session';
import { NavbarWrapper, ButtonWrapper, DemoButton, NavbarLogo } from './NavbarElements'
import logo from '../../images/nateflix-red.png'


const Navbar = () => {

  const dispatch = useDispatch();

  const handleDemo = async () => {
    let email = 'nate@nateflix.com', password = 'password';
    await dispatch(login(email, password))
  }

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <NavbarWrapper>
      <NavbarLogo> <img src={logo} alt="Logo" /> </NavbarLogo>
      {/* <NavbarContent />
      <Search />
      <ProfileButton /> */}
      <ButtonWrapper>
        <NavLink id='login' to='/login'> Log In </NavLink>
        <DemoButton onClick={handleDemo}> Demo </DemoButton>
        {/* <LogoutButton onClcik={handleLogout}> Log Out </LogoutButton> */}
      </ButtonWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
