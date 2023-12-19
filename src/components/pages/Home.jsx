import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styles from "./Home.module.css";

function Home() {

    const logo = '</>'

    return (

        <div className={`${[styles.container]} container-fluid p-0`}>
            <Header />
            <main className={`${[styles.main]}`}>
                <div className={`${[styles.grid]} row`}>
                    <div className={`${[styles.firstColumn]} col-8 d-flex flex-column justify-content-center`}>
                        <div className={styles.title}>
                            <h1 className={styles.h1}>Desenvolvedor FullStack</h1>
                            <span><TypingAnimation className={styles.typingAnimation} text="Profissional que abrange as duas áreas, todavia me considero com destaques em Front-End." /></span>
                        </div>
                        <div className={`${[styles.btn]} d-lg-flex d-none`}>
                            <a href="https://www.linkedin.com/in/devrafaelcunha/" target="blank" type="button" className="custom-btn btn-1 mt-5 me-5">Linkedin</a>
                            <a href="https://github.com/dev-rafaelcunha" target="blank" type="button" className="custom-btn btn-2 mt-5 mx-5">Github</a>
                            <a href="https://www.instagram.com/dev.rafaelcunha/?next=%2F" target="blank" type="button" className="custom-btn btn-3 mt-5 mx-5">Instagram</a>
                        </div>
                    </div>
                    <div className={`${[styles.secondColumn]} col-4 d-xl-flex d-none align-items-center`}>
                        <span className={styles.logo}>{logo}</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;