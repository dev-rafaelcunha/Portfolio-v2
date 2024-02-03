import styled from "styled-components";
import { useState } from 'react';

const LinkNav = styled.a`

    color: #444;
    font-size: 1rem;
    margin: 0 5px;
    letter-spacing: .5px;
    
    &:hover {
        color: #f83f67 !important;
    }

    &:hover::after {
        transform-origin: left;
        transform: scaleX(1);
    }

    &.active {
        color: #f83f67 !important;
        font-weight: 600;
    }
`;

function Nav() {

    const [activeLink, setActiveLink] = useState('Início');

    const handleLinkClick = (link) => {

        setActiveLink(link);
    };

    return (

        <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid p-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Início' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Início')}
                                href="#">
                                Início
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Sobre mim' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Sobre mim')}
                                href="#about">
                                Sobre mim
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Habilidades' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Habilidades')}
                                href="#skills">
                                Habilidades
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Experiências' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Experiências')}
                                href="#experiences">
                                Experiências
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Projetos' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Projetos')}
                                href="#projects">
                                Projetos
                            </LinkNav>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;