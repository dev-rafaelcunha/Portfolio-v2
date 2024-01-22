import styled from "styled-components";

const Link = styled.a`

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    letter-spacing: .5px;
    color: #9ca3af;
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
        color: #fff;
    }

    &:hover::after {
        transform-origin: left;
        transform: scaleX(1);
    }

    &:focus {
        color: #f0094a;
    }
`;

function Nav() {

    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Sobre mim</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Experiência</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Projetos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link shadow-none" aria-current="page" href="#">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;