import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styles from "./Home.module.css";

function Home() {

    return (

        <>
            <Header />
            <main className={`${[styles.main]} d-flex flex-column justify-content-center`}>
                <div className="row">
                    <div className={`${[styles.firstColumn]} col`}>
                        <div className={styles.title}>
                            <h1 className={styles.h1}>Desenvolvedor FullStack</h1>
                            <span><TypingAnimation className={styles.typingAnimation} text="Profissional que abrange as duas áreas, todavia me considero com destaques em Front-End." /></span>
                        </div>
                    </div>
                    <div className={`${[styles.secondColumn]} col`}>
                        <a href="#" type="button" className={`${[styles.btn]} btn btn-outline-primary border border-light shadow`}>Linkedin</a>
                        <a href="#" type="button" className={`${[styles.btn2]} btn btn-outline-light border border-light shadow`}>GitHub</a>
                        <a href="#" type="button" className={`${[styles.btn3]} btn btn-outline-danger border border-light shadow`}>Instagram</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;