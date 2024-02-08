import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styled from "styled-components";
import { GridLayout } from "../../global/GridLayout";
import CustomButton02 from "../common/CustomButton02";
import { FadeIn } from "../../global/FadeIn";
import { useInView } from "react-intersection-observer";

const Main = styled.main`

    height: 89.5vh;
    background-color: #fff;

    @media (max-width: 992px) {

        padding: 0 !important;
    }
`;

const Grid = styled.div`

    height: 89.5vh;

    @media (max-width: 992px) {

        display: flex !important;
        padding: 0 30px;
    }
`;

const FirstColumn = styled.div`

    background-color: #fff;
    z-index: 100;

    @media (max-width: 992px) {

        text-align: center !important;
        width: 100% !important;
    }
`;

const Title = styled.span`

    font-size: 3rem;
    color: #444;
    margin-bottom: 20px;
    display: block;
    animation: ${FadeIn} 1s ease-in-out forwards;

    @media (max-width: 992px) {

        font-size: 2.2rem;
        white-space: normal !important;
    }
`;

const SubTitle = styled.span`
  
    font-size: 1.5rem;
    letter-spacing: .5px;
    color: #f83f67;
    font-weight: 600;

    @media (max-width: 992px) {

        white-space: normal !important;
    }
`;

const SecondColumn = styled.div`

    right: 0;
`;

const Logo = styled.span`

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
`;

const ContainerSocial = styled.div`

    width: 590px;
    display: flex;

    @media (max-width: 992px) {

        justify-content: center !important;
        width: auto !important;
        padding: 0 15px !important;
    }
`;

function Home() {

    const logo = "";

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (

        <>
            <Header />
            <Main className="px-5">
                <GridLayout>
                    <Grid className="d-flex align-items-center justify-content-center">
                        <FirstColumn>
                            <Title className="text-nowrap" ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Desenvolvedor Front-end</Title>
                            <SubTitle>Portfólio 2.0</SubTitle>
                            <TypingAnimation text={`Este portfólio é uma versão moderna, com as tecnologias atuais do mercado, responsivo e reativo para melhor experiência do usuário.`} />
                            <ContainerSocial>
                                <CustomButton02 href="https://www.linkedin.com/in/devrafaelcunha/" target="blank" className="mx-0" text="Linkedin"></CustomButton02>
                            </ContainerSocial>
                        </FirstColumn>
                        {/* <SecondColumn className="position-absolute">
                            <Logo>{logo}</Logo>
                        </SecondColumn> */}
                    </Grid>
                </GridLayout>
            </Main>
        </>
    );
}

export default Home;