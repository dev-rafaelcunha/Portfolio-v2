import React, { useState } from 'react';
import styled from "styled-components";

const NavIcon = styled.div`

  position: absolute;
  right: 25px;
  top: 29px;
  
  @media(min-width: 993px) {
    display: none;
  }
`;

const Line1 = styled.div`
  width: 32px;
  height: .5px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  transform: ${({ active }) => active ? 'rotate(-45deg) translate(-8px, 8px)' : 'none'};
  
  @media(max-width: 480px) {

    height: .6px;
  }
`;

const Line2 = styled.div`
  width: 32px;
  height: 1px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  opacity: ${({ active }) => active ? '0' : '1'};

  @media(max-width: 480px) {

    height: 1px;
  }
`;

const Line3 = styled.div`
  width: 32px;
  height: 1px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  transform: ${({ active }) => active ? 'rotate(45deg) translate(-5px, -5px)' : 'none'};

  @media(max-width: 480px) {

height: .6px;
}
`;

const NavContent = styled.nav`

    height: 90vh;
    position: relative;
    top: 25px;
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 0;
    right: 25px;
    background: #03172d;
    padding: 150px 0;

  @media(min-width: 993px) {
    display: none;
  }
`;

const NavData = styled.ul`
  
  text-decoration: none;
`;

const NavItem = styled.a`
  
  display: block;
  text-decoration: none;
  color: #444;
  font-size: 1.3rem;
  margin: 5px;
  color: #fff;

  &:hover {

    color: #f83f67;
  }

  @media(max-width: 480px) {

    color: #fff;
  }
`;

function NavMobile() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const closeMenuAndNavigate = () => {
    setIsActive(false);
  };

  return (
    <>
      <NavIcon onClick={toggleActive}>
        <Line1 active={isActive} />
        <Line2 active={isActive} />
        <Line3 active={isActive} />
      </NavIcon>
      {isActive && (
        <NavContent>
          <NavData>
            <NavItem href="#" onClick={closeMenuAndNavigate}>Ínicio</NavItem>
            <NavItem href="#about" onClick={closeMenuAndNavigate}>Sobre mim</NavItem>
            <NavItem href="#skills" onClick={closeMenuAndNavigate}>Habilidades</NavItem>
            <NavItem href="#experiences" onClick={closeMenuAndNavigate}>Experiências</NavItem>
            <NavItem href="#projects" onClick={closeMenuAndNavigate}>Projetos</NavItem>
          </NavData>
        </NavContent>
      )}
    </>
  );
}

export default NavMobile;