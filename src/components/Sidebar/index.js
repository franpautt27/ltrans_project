import React, {useState} from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  const [showIcon, setShowIcon] = useState(false)
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="quienes-somos"
          >
            ¿Quiénes somos?
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="vision"
          >
            Nuestra Visión
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="clientes"
          >
            Clientes
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="servicios"
          >
            Servicios
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="ubiquenos"
          >
            Ubíquenos
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}
            to="contactenos"
          >
            Contáctenos
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
