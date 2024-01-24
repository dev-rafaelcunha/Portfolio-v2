import styled from "styled-components";
import { useState } from 'react';

const LinkNav = styled.a`

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    letter-spacing: .5px;
    color: #9ca3af !important;
    font-size: 1.1rem;
    margin: 0 5px;
    
    &::after {
        content: "";
        width: 100%;
        height: 1px;
        display: block;
        background-image: linear-gradient(to right, #966cf900, #f52754, #f52754);
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.5s;
    }

    &:hover {
        color: #fff !important;
    }

    &:hover::after {
        transform-origin: left;
        transform: scaleX(1);
    }

    &.active {
        color: #f83f67 !important;
    }
`;

function Nav() {

    const [activeLink, setActiveLink] = useState('Início');

    const handleLinkClick = (link) => {

        setActiveLink(link);
    };

    return (

        <nav className="navbar navbar-expand-lg">
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
                        <li className="nav-item">
                            <LinkNav
                                className={`nav-link shadow-none ${activeLink === 'Contatos' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Contatos')}
                                href="#contacts">
                                Contatos
                            </LinkNav>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;