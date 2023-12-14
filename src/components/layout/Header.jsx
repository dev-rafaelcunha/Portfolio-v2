import styles from './Header.module.css'
import Nav from './Nav'

function Header({ nome, left, right }) {

    nome = 'Rafael Cunha'
    left = '< '
    right = ' />'

    return (

        <header className={`${styles['header']} d-flex align-items-center justify-content-between`}>
            <a className={styles.link}>{nome}</a>
                <span className={`${[styles.left]} text-purple`}>{left}</span>
                <span className={`${[styles.right]} text-purple`}>{right}</span>
            <Nav />
        </header>
    )
}

export default Header;