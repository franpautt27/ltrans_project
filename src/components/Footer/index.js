import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Barranquilla</FooterLinkTitle>
              <FooterLink to="">Cra 42 No 4-52 Zona Portuaria. </FooterLink>
              <FooterLink to="">(+57) 340-5225</FooterLink>
              <FooterLink to="">asanchez@l-trans.co</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Cartagena</FooterLinkTitle>
              <FooterLink to="">
                Avenida Principal del Bosque, Sector San Isidro Transversal 54 #
                28-25, Edificio Movisol Of. 201 Piso 2
              </FooterLink>
              <FooterLink to="">(+57) 6426994 </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
              <FooterLink smooth={true}
                  duration={500}
                  spy={true}
                   to="quienes-somos">Quienes somos</FooterLink>
              <FooterLink smooth={true}
                  duration={500}
                  spy={true}
                  to="services">Servicios</FooterLink>
              <FooterLink smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80} to="ubiquenos">Ubíquenos</FooterLink>
              <FooterLink smooth={true}
                  duration={500}
                  spy={true}
                  to="contactenos">Contáctenos</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="" onClick={toggleHome}>
              L-Trans
            </SocialLogo>
            <WebsiteRights>
              L-Trans {new Date().getFullYear()} Todos los derechos reservados{" "}
            </WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
