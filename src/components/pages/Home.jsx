import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styles from "./Home.module.css";

function Home() {

    return (

        <div className={`${[styles.container]} container-fluid p-0`}>
            <Header />
            <main className={`${[styles.main]}`}>
                <div className={`${[styles.grid]} row`}>
                    <div className={`${[styles.firstColumn]} col-8 d-flex flex-column justify-content-center`}>
                        <div className={styles.title}>
                            <h1 className={styles.h1}>Desenvolvedor FullStack</h1>
                            <span><TypingAnimation className={styles.typingAnimation} text="Profissional que abrange as duas áreas, todavia me considero com destaques em Front-End." /></span>
                            <div className="d-lg-flex d-none">
                                <a href="#" type="button" className={`${[styles.btn]} btn btn-outline-primary mt-5`}>Linkedin</a>
                                <a href="#" type="button" className={`${[styles.btn]} btn btn-outline-light mt-5 mx-5`}>Github</a>
                                <a href="#" type="button" className={`${[styles.btn]} btn btn-outline-danger mt-5`}>Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${[styles.secondColumn]} col d-flex align-items-center`}>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;