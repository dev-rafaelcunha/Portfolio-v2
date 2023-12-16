import styles from './Header.module.css'
import Nav from './Nav'

function Header() {

    const name = 'Rafael Cunha'
    const logo = '</>'

    return (

        <header className={`${styles['header']} d-flex align-items-center justify-content-between`}>
            <span className={styles.name}>{name}</span>
            <span className={styles.logo}>{logo}</span>
            <Nav />
        </header>
    )
}

export default Header;