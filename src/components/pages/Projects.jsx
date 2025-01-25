import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from "../../global/Theme";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "../../global/FadeIn";
import { GridLayout } from "../../global/GridLayout";
import project01 from "../../img/project01.png";
import project02 from "../../img/project02.png";
import project03 from "../../img/project03.png";
import project04 from "../../img/project04.png";
import project05 from "../../img/project05.png";
import project06 from "../../img/project06.png";

const Section = styled.section`
    
    background-color: ${props => props.theme.themeColor};

    @media (max-width: 1280px) {

        height: auto;
    }
`;

const Container = styled.div`

    padding: 0;

    @media (max-width: 1280px) {

        height: auto;
    }
`;

const Title = styled.h1`

    text-align: center;
    color: #444;
    padding: 60px 0;
    margin: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;

    & b {
        color: ${props => props.theme.primaryColor};
    }

    @media (max-width: 768px) {
        padding: 20px 3%;
    }
`;

const Card = styled.div`
    
    height: 250px;
    width: 350px;
    background-image: url(${props => props.backGroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    border: ${props => props.Border};
    transition: .3s;
    background-color: #444;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    position: relative;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: ${props => props.AnimationDelay};
    opacity: 0;

    &:hover {
        background: ${props => props.theme.themeColor};
    }

    @media (min-width: 810px) and (max-width: 1182px) {

        animation-delay: ${props => props.DelayLarge}; 
    }
    
    @media (min-width: 810px) and (max-width: 1182px) {

        animation-delay: ${props => props.DelayMobile};
    }

    @media (max-width: 480px) {

        background-image: none;
        background-color: inherit;
    }
`;

const CardProjects = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280px) {

        justify-content: center;
    }
`;

const Repository = styled.a`
    
    color: ${props => props.theme.primaryColor};
    margin: 40px auto 0;
    font-size: 1.2rem;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .8s;
    opacity: 0;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid;
    padding: 6px 8px;
    min-width: 240px;
    text-align: center;
    margin: 40px 0 80px;

    &::before {
        content: 'Ir para o GitHub >>';
        position: absolute;
        height: 100%;
        width: 0;
        background-color: ${props => props.theme.primaryColor};
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        text-wrap: nowrap;
    }

    &:hover::before {
        width: 100%;
        visibility: visible;
        opacity: 1;
    }

    @media (max-width: 768px) {

        color: ${props => props.theme.primaryColor};
        margin: 40px 0 20px;
    }
`;

const TitleCard = styled.span`
    
    color: #444;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    top: 20px;
`;

const DescriptionCard = styled.p`
    
    color: #444;
    font-size: 1rem;
    margin: 0;
`;

const ButtonCard = styled.a`
    
    padding: .4rem 1rem;
    background-color: ${props => props.backGroundColor};
    font-size: .9rem;
    border-radius: 5px;
    border: none;
    color: ${props => props.theme.themeColor};
    position: absolute;
    bottom: 20px;
    text-decoration: none;
    transition: .3s;

    &:hover {
       background-color: ${props => props.hover};
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.5; 
    }

    @media (max-width: 480px) {

        background-color: ${props => props.backGroundMobile};
    }
`;

function Projects() {

    const [hovered, setHovered] = useState(null);

    const handleMouseOver = (index) => {
        setHovered(index);
    };

    const handleMouseOut = () => {
        setHovered(null);
    };

    const myProjects = [
        {
            title: "Portfólio",
            // description: "Meu primeiro Portfólio, onde utilizei HTML, CSS, Bootstrap, JavaScript e PHP.",
            description: "Link em Manutenção!",
            borderColor: "#dc3545",
            image: project01,
            link: "http://localhost/portfolio/",
            backgroundColor: "#dc3545",
            AnimationDelay: ".3s",
            disabled: true
        },
        {
            title: "Netflix Clone",
            description: "Clone da Netflix feito em HTML, CSS e Bootstrap, junto com a escola Hcode Treinamentos.",
            borderColor: "#e50914",
            image: project02,
            link: "https://netflix-clone-nu-gules.vercel.app/",
            backgroundColor: "#e50914",
            AnimationDelay: ".6s",
            DelayMobile: "1s"
        },
        {
            title: "WhatsApp Web Clone",
            description: "Clone do WhatsApp feito em HTML, CSS e Bootstrap, junto com a escola Hcode Treinamentos.",
            borderColor: "#09d261",
            image: project03,
            link: "https://whatsappweb-clone-zeta.vercel.app/",
            backgroundColor: "#09d261",
            AnimationDelay: ".9s",
            DelayLarge: "1s",
            DelayMobile: "1s"
        },
        {
            title: "Calculadora Hcode",
            description: "Calculadora feita em JavaScript junto com a escola Hcode Treinamentos.",
            borderColor: "#f88a3f",
            image: project04,
            link: "https://calculadora-c.vercel.app/",
            backgroundColor: "#f88a3f",
            AnimationDelay: "1.2s",
            DelayMobile: "1s"
        },

        {
            title: "Sistema em PHP",
            // description: "Sistema básico para treinar conceitos de back-end, feito por mim com HTML, Bootstrap, PHP e MySQL",
            description: "Link em Manutenção!",
            borderColor: "#a9dae5",
            image: project05,
            link: "http://localhost/sistema-php/index.php",
            backgroundColor: "#a9dae5",
            AnimationDelay: "1.5s",
            DelayLarge: "1s",
            DelayMobile: "1s",
            disabled: true
        },

        {
            title: "Costs",
            description: "Sistema para criar Projetos, feito com ReactJS e Bootstrap, junto com o treinamento Hora de Codar.",
            borderColor: "#ffbb33",
            image: project06,
            link: "https://costs-seven-teal.vercel.app/",
            backgroundColor: "#ffbb33",
            AnimationDelay: "1.8s",
            DelayLarge: "1.3s",
            DelayMobile: "1s"
        }
    ];

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    const [refPortfolio, inViewPortfolio] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refNetflix, inViewNetflix] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refWpp, inViewWpp] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refCalc, inViewCalc] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refSystem, inViewSystem] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refCosts, inViewCosts] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refRepository, inViewRepository] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    myProjects[0].ref = refPortfolio;
    myProjects[0].style = { animationPlayState: inViewPortfolio ? 'running' : 'paused' };

    myProjects[1].ref = refNetflix;
    myProjects[1].style = { animationPlayState: inViewNetflix ? 'running' : 'paused' };

    myProjects[2].ref = refWpp;
    myProjects[2].style = { animationPlayState: inViewWpp ? 'running' : 'paused' };

    myProjects[3].ref = refCalc;
    myProjects[3].style = { animationPlayState: inViewCalc ? 'running' : 'paused' };

    myProjects[4].ref = refSystem;
    myProjects[4].style = { animationPlayState: inViewSystem ? 'running' : 'paused' };

    myProjects[5].ref = refCosts;
    myProjects[5].style = { animationPlayState: inViewCosts ? 'running' : 'paused' };


    return (
        <ThemeProvider theme={LightTheme}>
            <Section id="projects">
                <GridLayout>
                    <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Projetos <b>.</b></Title>
                    <Container>
                        <CardProjects>
                            {myProjects.map((myProject, index) => (
                                <Card
                                    key={index}
                                    className="rounded shadow"
                                    Border={`solid 2px ${myProject.borderColor}`}
                                    backGroundImage={myProject.image}
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={handleMouseOut}
                                    AnimationDelay={myProject.AnimationDelay}
                                    DelayLarge={myProject.DelayLarge}
                                    DelayMobile={myProject.DelayMobile}
                                    ref={myProject.ref}
                                    style={myProject.style}
                                >
                                    {(hovered === index || window.matchMedia("(max-width: 480px)").matches) && (
                                        <div>
                                            <TitleCard>{myProject.title}</TitleCard>
                                            <DescriptionCard>{myProject.description}</DescriptionCard>
                                            <ButtonCard
                                                href={myProject.link}
                                                target="_blank"
                                                backGroundColor={`${myProject.backgroundColor}c7`}
                                                backGroundMobile={myProject.backgroundColor}
                                                hover={myProject.backgroundColor}
                                                className={myProject.disabled ? "disabled" : ""}
                                            >
                                                Visualizar Projeto
                                            </ButtonCard>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </CardProjects>
                    </Container>
                    <div className="d-flex justify-content-center">
                        <Repository
                            href="https://github.com/dev-rafaelcunha?tab=repositories"
                            target="_blank"
                            ref={refRepository} style={{ animationPlayState: inViewRepository ? 'running' : 'paused' }}
                        >
                            Repositórios.
                        </Repository>
                    </div>
                </GridLayout>
            </Section>
        </ThemeProvider>
    );
}

export default Projects;