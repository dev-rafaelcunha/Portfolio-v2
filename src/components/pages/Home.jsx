import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styled from "styled-components";
import SocialButton from "../common/SocialButton";

const Main = styled.main`

    height: 90vh;
    background-color: #111;

    @media (max-width: 991px) {

        padding: 0 !important;
    }
`

const Grid = styled.main`

    height: 80vh;
    width: 100vw;

    @media (max-width: 991px) {

        display: flex !important;
        padding: 0 30px;
    }
`
const FirstColumn = styled.main`

    background-color: #111;
    z-index: 100;
    width: 40% !important;

    @media (max-width: 991px) {

        text-align: center !important;
        width: 100% !important;
    }
`

const Title = styled.main`

    font-size: 3rem;
    color: #fff;

    @media (max-width: 991px) {

        font-size: 2.5rem;
        white-space: normal !important;
    }
`

const SecondColumn = styled.main`

    right: 0;
`

const Logo = styled.main`

    font-size: 330px;
    font-family: monospace;
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(to left, transparent, #f52754);
    -webkit-background-clip: text;
    background-clip: text;

    @media (max-width: 1200px) {
        
        display: none !important;
    }
`

const ContainerSocial = styled.main`

    width: 590px;
    display: flex;

    @media (max-width: 991px) {

        justify-content: center !important;
        width: auto !important;
    }
`

function Home() {

    const logo = "</>"

    return (

        <div className="container-fluid p-0">
            <Header />
            <Main className="px-5">
                <div className="grid-layout">
                    <Grid className="d-flex align-items-center">
                        <FirstColumn>
                            <Title className="text-nowrap mb-4">Desenvolvedor FullStack</Title>
                            <TypingAnimation className="typingAnimation" text="Profissional que abrange as duas áreas, todavia me considero com destaques em Front-End." />
                            <ContainerSocial>
                                <SocialButton href="https://www.linkedin.com/in/devrafaelcunha/" target="blank" className="btn-1 mt-5" text="Linkedin"></SocialButton>
                                <SocialButton href="https://github.com/dev-rafaelcunha" target="blank" className="btn-2 mt-5" text="Github"></SocialButton>
                                <SocialButton href="https://www.instagram.com/dev.rafaelcunha/?next=%2F" target="blank" className="btn-3 mt-5" text="Instagram"></SocialButton>
                            </ContainerSocial>
                        </FirstColumn>
                        <SecondColumn className="position-absolute">
                            <Logo>{logo}</Logo>
                        </SecondColumn>
                    </Grid>
                </div>
            </Main>
        </div>
    )
}

export default Home;