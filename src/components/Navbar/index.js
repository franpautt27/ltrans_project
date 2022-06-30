import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
            <Logo src="./images/empresas/ltrans.png" alt="" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="quienes-somos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  ¿Quiénes somos?
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="vision"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Nuestra Visión
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="clientes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Clientes
                </NavLinks>
              </NavItem>
              <NavItem></NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="ubiquenos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Ubíquenos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactenos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Contáctenos
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Iniciar Sesión</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
