import styles from './Header.module.css'
import Nav from './Nav'

function Header() {

    const nome = 'Rafael Cunha'
    const left = '<'
    const right = '/>'

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