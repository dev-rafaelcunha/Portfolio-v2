import styles from './Header.module.css'
import Nav from './Nav'

function Header() {

    const name = 'Rafael Cunha'
    const logo = '</>'

    return (

        <header className={`${styles['header']} px-5 py-3`}>
            <div className="grid-layout">
                <div className='d-flex align-items-center justify-content-between'>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.logo}>{logo}</span>
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;