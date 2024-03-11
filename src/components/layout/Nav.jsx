import styled from "styled-components";

const Navbar = styled.nav`
    
    @media(max-width: 992px) {

        display: none;
    }
`;

const LinkNav = styled.a`

    color: #444;
    font-size: 1rem;
    margin: 0 5px;
    letter-spacing: .5px;
    
    &:hover {
        color: ${props => props.theme.primaryColor};
    }

    &:hover::after {
        transform-origin: left;
        transform: scaleX(1);
    }

    &.active {
        color: ${props => props.theme.primaryColor};
        font-weight: 600;
    }
`;

function Nav() {

    // const [activeLink, setActiveLink] = useState('Início');

    // const handleLinkClick = (link) => {

    //     setActiveLink(link);
    // };

    return (

        <Navbar className="navbar navbar-expand-lg p-0">
            <div className="container-fluid p-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <LinkNav
                                // className={`nav-link shadow-none ${activeLink === 'Início' ? 'active' : ''}`}
                                // onClick={() => handleLinkClick('Início')}
                                className="nav-link shadow-none"
                                href="#">
                                Início
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                // className={`nav-link shadow-none ${activeLink === 'Sobre mim' ? 'active' : ''}`}
                                // onClick={() => handleLinkClick('Sobre mim')}
                                className="nav-link shadow-none"
                                href="#about">
                                Sobre mim
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                // className={`nav-link shadow-none ${activeLink === 'Habilidades' ? 'active' : ''}`}
                                // onClick={() => handleLinkClick('Habilidades')}
                                className="nav-link shadow-none"
                                href="#skills">
                                Habilidades
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                // className={`nav-link shadow-none ${activeLink === 'Experiências' ? 'active' : ''}`}
                                // onClick={() => handleLinkClick('Experiências')}
                                className="nav-link shadow-none"
                                href="#experiences">
                                Experiências
                            </LinkNav>
                        </li>
                        <li className="nav-item">
                            <LinkNav
                                // className={`nav-link shadow-none ${activeLink === 'Projetos' ? 'active' : ''}`}
                                // onClick={() => handleLinkClick('Projetos')}
                                className="nav-link shadow-none"
                                href="#projects">
                                Projetos
                            </LinkNav>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    )
}

export default Nav;