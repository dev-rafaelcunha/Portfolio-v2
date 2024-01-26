import Header from "../layout/Header";
import TypingAnimation from "../utils/TypingAnimation";
import styled from "styled-components";
import { GridLayout } from "../../global/GridLayout";
import CustomButton02 from "../common/CustomButton02";

const Main = styled.main`

    height: 98vh;
    background-color: #111;

    @media (max-width: 1199px) {

        height: 87.6vh;
    }

    @media (max-width: 991px) {

        padding: 0 !important;
        height: 87.6vh;
    }
`;

const Grid = styled.div`

    height: 100vh;
    width: 100vw;

    @media (max-width: 991px) {

        display: flex !important;
        padding: 0 30px;
    }
`;

const FirstColumn = styled.div`

    background-color: #111;
    z-index: 100;
    width: 40% !important;

    @media (max-width: 991px) {

        text-align: center !important;
        width: 100% !important;
    }
`;

const Title = styled.span`

    font-size: 3rem;
    color: #fff;
    margin-bottom: 20px;
    display: block;

    @media (max-width: 991px) {

        font-size: 2.2rem;
        white-space: normal !important;
    }
`;

const SubTitle = styled.span`
  
    font-size: 1.5rem;
    letter-spacing: .5px;
    color: #f83f67;

    @media (max-width: 991px) {

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

    @media (max-width: 991px) {

        justify-content: center !important;
        width: auto !important;
        padding: 0 15px !important;
    }
`;

function Home() {

    const logo = "</>";

    return (

        <>
            <Header />
            <Main className="px-5">
                <GridLayout>
                    <Grid className="d-flex align-items-center">
                        <FirstColumn>
                            <Title className="text-nowrap">Desenvolvedor Front-end</Title>
                            <SubTitle>Portfólio 2.0</SubTitle>
                            <TypingAnimation text={`Este portfólio é uma versão moderna, com as tecnologias atuais do mercado, responsivo e reativo para melhor experiência do usuário.`} />
                            <ContainerSocial>
                                <CustomButton02 href="https://www.linkedin.com/in/devrafaelcunha/" target="blank" className="mt-5 mx-0" text="Linkedin"></CustomButton02>
                            </ContainerSocial>
                        </FirstColumn>
                        <SecondColumn className="position-absolute">
                            <Logo>{logo}</Logo>
                        </SecondColumn>
                    </Grid>
                </GridLayout>
            </Main>
        </>
    );
}

export default Home;