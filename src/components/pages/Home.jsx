import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from "../../global/Theme";
import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import { GridLayout } from "../../global/GridLayout";
import CustomButton02 from "../common/CustomButton02";
import { FadeIn } from "../../global/FadeIn";
import { useInView } from "react-intersection-observer";

const Main = styled.main`

    height: 89.5vh;
    background-color: ${props => props.theme.themeColor};

    @media (max-width: 1024px) {

        padding: 0 !important;
    }
`;

const Grid = styled.div`

    height: 89.5vh;

    @media (max-width: 1024px) {

        display: flex !important;
        padding: 0 30px;
    }

    @media (max-width: 1024px) {

        display: flex !important;
        padding: 0 3%;
    }
`;

const FirstColumn = styled.div`

    background-color: ${props => props.theme.themeColor};
    z-index: 100;

    @media (max-width: 1024px) {

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

    @media (max-width: 1024px) {

        font-size: 2.2rem;
        white-space: normal !important;
    }
`;

const SubTitle = styled.span`
  
    font-size: 1.5rem;
    letter-spacing: .5px;
    color: ${props => props.theme.primaryColor};
    font-weight: 600;

    @media (max-width: 1024px) {

        white-space: normal !important;
    }
`;

const ContainerSocial = styled.div`

    width: 590px;
    display: flex;

    @media (max-width: 1024px) {

        justify-content: center !important;
        width: auto !important;
        padding: 0 15px !important;
    }
`;

function Home() {

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (

        <>
            <ThemeProvider theme={LightTheme}>
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
                        </Grid>
                    </GridLayout>
                </Main>
            </ThemeProvider>
        </>
    );
}

export default Home;