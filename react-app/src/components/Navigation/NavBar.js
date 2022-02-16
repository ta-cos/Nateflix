
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { login, logout } from '../../store/session';
import { NavbarWrapper, ButtonWrapper, DemoButton, NavbarLogo, LogoutButton, NavbarContent } from './NavbarElements'
import logo from '../../images/nateflix-red.png'


const Navbar = () => {


  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.session.user)

  const handleDemo = async () => {
    let email = 'nate@nateflix.com', password = 'password';
    await dispatch(login(email, password));
    history.push('/profiles')
  }

  const handleLogout = async () => {
    await dispatch(logout())
  };

  return (
    <NavbarWrapper>
      <NavbarLogo> <img src={logo} alt="Logo" /> </NavbarLogo>
      {user ? <NavbarContent>
        <NavLink to='profiles'>Profile</NavLink>
      </NavbarContent> : null}
      <ButtonWrapper>
        {user ? <LogoutButton onClick={handleLogout}>Log Out</LogoutButton> : <NavLink id='login' to='/login'> Log In </NavLink>}
        <DemoButton onClick={handleDemo}> Demo </DemoButton>
        {/* <LogoutButton onClcik={handleLogout}> Log Out </LogoutButton> */}
      </ButtonWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
