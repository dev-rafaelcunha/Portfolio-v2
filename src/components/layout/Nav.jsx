import styled from "styled-components";
import HeaderFixed from "../utils/HeaderFixed";

const Navbar = styled.nav`
    @media(max-width: 1024px) {
        display: none;
    }
`;

const Lista = styled.ul`
    gap: 30px;
`;

const LinkNav = styled.a`
    color: ${props => props.theme.secondaryColor};
    font-size: 1rem;
    letter-spacing: .5px;
    transition: .3s;
    position: relative;

    &:hover {
        color: ${props => props.theme.primaryColor};
    }

    &::before {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        background-color: ${props => props.theme.primaryColor};
        bottom: 0;
        right: 0;
        transition: .3s;
    }

    &:hover::before {
        width: 100%;
        left: 0;
    }
`;

const navItems = [
    { href: "#", label: "Início" },
    { href: "#about", label: "Sobre mim" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experiences", label: "Experiências" },
    { href: "#projects", label: "Projetos" },
];

function Nav() {
    const headerFixed = HeaderFixed();

    return (
        <Navbar className="navbar navbar-expand-lg p-0">
            <div className="container-fluid p-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Lista className="navbar-nav align-items-center">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <LinkNav
                                    fixedActive={headerFixed}
                                    className={`nav-link shadow-none p-0 ${headerFixed ? 'fixed-active' : ''}`}
                                    href={item.href}>
                                    {item.label}
                                </LinkNav>
                            </li>
                        ))}
                    </Lista>
                </div>
            </div>
        </Navbar>
    );
}

export default Nav;
