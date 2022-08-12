import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();

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
                  
                >
                  Contáctenos
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink target="_blank" href="https://avansat6.intrared.net:8083/ap/sate_ltrans/session.php?op=2&usuario=admin-ltrans&app=1" >Iniciar Sesión</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
