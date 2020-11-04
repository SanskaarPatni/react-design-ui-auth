import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    // setError('');
    try {
      await logout();
      history.pushState('/signin');
    } catch {
      // setError('Failed to logout');
    }
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    }
    else {
      setScrollNav(false);
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>MindSpace</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
              </NavItem>
              {/*<div style={{ color: '#fff' }}>Welcome {currentUser.email}!</div> : */}
              {currentUser ?
                < NavItem >
                  <NavLinks to="update-profile" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Update Profile</NavLinks>
                </NavItem> :
                <NavItem>
                  <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                </NavItem>}
              {currentUser ? <span style={{ color: '#fff' }}>Welcome {currentUser.email}! </span> : ''}
            </NavMenu>

            <NavBtn>
              {currentUser ? <NavBtnLink onClick={handleLogout}>Sign Out</NavBtnLink> : <NavBtnLink to="/signin">Sign In</NavBtnLink>}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;


