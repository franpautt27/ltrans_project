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
              <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
              <FooterLink to="">Quienes somos</FooterLink>
              <FooterLink to="">Servicios</FooterLink>
              <FooterLink to="">Ubíquenos</FooterLink>
              <FooterLink to="">Contáctenos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
              <FooterLink to="">Quienes somos</FooterLink>
              <FooterLink to="">Servicios</FooterLink>
              <FooterLink to="">Ubíquenos</FooterLink>
              <FooterLink to="">Contáctenos</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
              <FooterLink to="">Quienes somos</FooterLink>
              <FooterLink to="">Servicios</FooterLink>
              <FooterLink to="">Ubíquenos</FooterLink>
              <FooterLink to="">Contáctenos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="">Instagram</FooterLink>
              <FooterLink to="">Facebook</FooterLink>
              <FooterLink to="">Twitter</FooterLink>
              <FooterLink to="">Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="" onClick={toggleHome}>
              L-Trans
            </SocialLogo>
            <WebsiteRights>
              L-Trans {new Date().getFullYear()} All Rights Reserved{" "}
            </WebsiteRights>
            <SocialIcons>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
