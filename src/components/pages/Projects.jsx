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
    padding: 0 40px 80px;

    @media (max-width: 1199px) {

        height: auto;
    }
`;

const Container = styled.div`
    
    @media (max-width: 1199px) {

        height: auto;
    }
`;

const Title = styled.h1`

    text-align: center;
    color: #444;
    padding: 60px 0;
    margin: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
`;

const Point = styled.span`
    
    color: ${props => props.theme.primaryColor};
`;

const Card = styled.div`
    
    height: 250px;
    width: 350px;
    background-image: url(${props => props.backGroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    border: ${props => props.Border};
    transition: 1s all ease;
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

    @media (max-width: 1199px) {

        justify-content: center;
    }
`;

const Repository = styled.a`
    
    color: #444;
    margin: 30px 0 0;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .8s;
    opacity: 0;


    &:hover {
        
        color: ${props => props.theme.primaryColor};
        cursor: pointer;
    }

    @media (max-width: 480px) {

        color: ${props => props.theme.primaryColor};
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

    &:hover {
       background-color: ${props => props.hover};
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
            description: "Meu primeiro Portfólio, onde utilizei HTML, CSS, Bootstrap, JavaScript e PHP.",
            borderColor: "#dc3545",
            image: project01,
            link: "http://localhost/portfolio/",
            backgroundColor: "#dc3545",
            AnimationDelay: "1s"
        },
        {
            title: "Netflix Clone",
            description: "Clone da Netflix feito em HTML, CSS e Bootstrap, junto com a escola Hcode Treinamentos.",
            borderColor: "#e50914",
            image: project02,
            link: "http://localhost/estudos/netflix-clone/",
            backgroundColor: "#e50914",
            AnimationDelay: "1.3s",
            DelayMobile: "1s"
        },
        {
            title: "WhatsApp Web Clone",
            description: "Clone do WhatsApp feito em HTML, CSS e Bootstrap, junto com a escola Hcode Treinamentos.",
            borderColor: "#09d261",
            image: project03,
            link: "http://localhost/estudos/hcode-bootstrap/Whatsapp/",
            backgroundColor: "#09d261",
            AnimationDelay: "1.6s",
            DelayLarge: "1s",
            DelayMobile: "1s"
        },
        {
            title: "Calculadora Hcode",
            description: "Calculadora feita em JavaScript junto com a escola Hcode Treinamentos.",
            borderColor: "#f88a3f",
            image: project04,
            link: "http://localhost/estudos/calculadora-clone/",
            backgroundColor: "#f88a3f",
            AnimationDelay: "1.3s",
            DelayMobile: "1s"
        },

        {
            title: "Sistema",
            description: "Sistema básico para treinar conceitos de back-end, feito por mim com HTML, Bootstrap, PHP e MySQL",
            borderColor: "#a9dae5",
            image: project05,
            link: "http://localhost/sistema-php/index.php",
            backgroundColor: "#a9dae5",
            AnimationDelay: "1.6s",
            DelayLarge: "1s",
            DelayMobile: "1s"
        },

        {
            title: "Costs",
            description: "Sistema para criar Projetos, feito com ReactJS e Bootstrap, junto com o treinamento Hora de Codar.",
            borderColor: "#ffbb33",
            image: project06,
            link: "http://localhost:3001/",
            backgroundColor: "#ffbb33",
            AnimationDelay: "1.9s",
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
                    <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Projetos<Point> .</Point></Title>
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
                            Repositórios no GitHub.
                        </Repository>
                    </div>
                </GridLayout>
            </Section>
        </ThemeProvider>
    );
}

export default Projects;