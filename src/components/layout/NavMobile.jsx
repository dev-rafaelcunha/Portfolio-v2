import React, { useState } from 'react';
import styled from "styled-components";

const MobileMenu = styled.div`
  @media(min-width: 993px) {
    display: none;
  }
`;

const Line1 = styled.div`
  width: 32px;
  height: 1px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  transform: ${({ active }) => active ? 'rotate(-45deg) translate(-8px, 8px)' : 'none'};
`;

const Line2 = styled.div`
  width: 32px;
  height: 1px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  opacity: ${({ active }) => active ? '0' : '1'};
`;

const Line3 = styled.div`
  width: 32px;
  height: 1px;
  background-color: #444;
  margin: 8px;
  transition: .4s;
  transform: ${({ active }) => active ? 'rotate(45deg) translate(-5px, -5px)' : 'none'};
`;

function NavMobile() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <MobileMenu onClick={toggleActive}>
            <Line1 active={isActive} />
            <Line2 active={isActive} />
            <Line3 active={isActive} />
        </MobileMenu>
    );
}

export default NavMobile;