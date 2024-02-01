import { useEffect, useState } from "react";
import styled from "styled-components";
import { GridLayout } from "../../global/GridLayout";
import project01 from "../../img/project01.png";
import project02 from "../../img/project02.png";
import project03 from "../../img/project03.png";

const Section = styled.section`
    
    background-color: #fff;
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
`;

const Point = styled.span`
    
    color: #f83f67;
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

    &:hover {
        background: #fff;
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
    padding: 40px 0;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    width: fit-content;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        
        color: #f83f67;
        cursor: pointer;
    }

    @media (max-width: 480px) {

        color: #f83f67;
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
    color: #fff;
    position: absolute;
    bottom: 20px;
    transition: .5s all ease;
    text-decoration: none;

    &:hover {
       background-color: ${props => props.hover}
    }

    @media (max-width: 480px) {

        background-color: ${props => props.backGroundMobile}
    }
`;

function Projects() {

    const [hovered, setHovered] = useState([false, false, false]);
    const [cardHovered, setCardHovered] = useState(null);

    const handleMouseOver = (index) => {
        if (!window.matchMedia("(max-width: 480px)").matches) {
            const newHovered = [...hovered];
            newHovered[index] = true;
            setHovered(newHovered);
        }
    };

    const handleMouseOut = (index) => {
        if (!window.matchMedia("(max-width: 480px)").matches) {
            const newHovered = [...hovered];
            newHovered[index] = false;
            setHovered(newHovered);
        }
    };

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(max-width: 480px)").matches) {
                setHovered([true, true, true]);
            } else {
                setHovered([false, false, false]);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const myProjects = [
        {
            title: "Portfólio",
            description: "Meu primeiro Portfólio, onde utilizei HTML, CSS, Bootstrap, JavaScript e PHP.",
            borderColor: "#f83f67",
            image: project01,
            link: "http://localhost/portfolio/",
            backgroundColor: "#dc3545"
        },
        {
            title: "Netflix Clone",
            description: "Clone da Netflix feito em HTML, CSS e Bootstrap, juntamente com a Hcode Treinamentos.",
            borderColor: "#e50914",
            image: project02,
            link: "http://localhost/estudos/netflix-clone/",
            backgroundColor: "#e50914"
        },
        {
            title: "WhatsApp Web Clone",
            description: "Clone do WhatsApp feito em HTML, CSS e Bootstrap, juntamente com a Hcode Treinamentos.",
            borderColor: "#09d261",
            image: project03,
            link: "http://localhost/estudos/hcode-bootstrap/Whatsapp/",
            backgroundColor: "#09d261"
        }
    ];


    return (
        <Section id="projects">
            <GridLayout>
                <Title>Projetos<Point> .</Point></Title>
                <Container>
                    <CardProjects>
                        {myProjects.map((myProject, index) => (
                            <Card
                                key={index}
                                className="rounded shadow"
                                Border={`solid 2px ${myProject.borderColor}`}
                                backGroundImage={myProject.image}
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={() => handleMouseOut(index)}
                            >
                                {hovered[index] ?
                                    <div>
                                        <TitleCard>{myProject.title}</TitleCard>
                                        <DescriptionCard>{myProject.description}</DescriptionCard>
                                        <ButtonCard
                                            href={myProject.link}
                                            target="_blank"
                                            backGroundColor={`${myProject.backgroundColor}c7`}
                                            backGroundMobile={myProject.backgroundColor}
                                            hover={myProject.backgroundColor}
                                        >Visualizar Projeto
                                        </ButtonCard>
                                    </div>
                                    : null}
                            </Card>
                        ))}
                    </CardProjects>
                </Container>
                <div className="d-flex justify-content-center">
                    <Repository href="https://github.com/dev-rafaelcunha?tab=repositories" target="_blank">Repositórios no GitHub.</Repository>
                </div>
            </GridLayout>
        </Section>
    );

}

export default Projects;