import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styles from "./Home.module.css";

function Home() {

    return (

        <div className="container-fluid p-0">
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

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;