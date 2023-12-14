import styles from './Nav.module.css'

function Nav() {

    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover`} aria-current="page" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-4`} aria-current="page" href="#">Sobre mim</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-4`} href="#">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-4`} href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-4`} href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;