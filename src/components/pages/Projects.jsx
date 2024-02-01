import { useState } from "react";
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
`;

function Projects() {
    const [hovered, setHovered] = useState([false, false, false]);

    const handleMouseOver = (index) => {
        const newHovered = [...hovered];
        newHovered[index] = true;
        setHovered(newHovered);
    };

    const handleMouseOut = (index) => {
        const newHovered = [...hovered];
        newHovered[index] = false;
        setHovered(newHovered);
    };

    return (
        <Section id="projects">
            <GridLayout>
                <Title>Projetos<Point> .</Point></Title>
                <Container>
                    <CardProjects>
                        <Card
                            className="rounded shadow"
                            Border="solid 2px #f83f67"
                            backGroundImage={project01}
                            onMouseOver={() => handleMouseOver(0)}
                            onMouseOut={() => handleMouseOut(0)}
                        >
                            {hovered[0] ?
                                <div>
                                    <TitleCard>Portfólio 1.0</TitleCard>
                                    <DescriptionCard>Meu primeiro Portfólio, onde utilizei HTML, CSS, Bootstrap, JavaScript e PHP.</DescriptionCard>
                                    <ButtonCard href="http://localhost/portfolio/" target="_blank" backGroundColor="#dc3545c7" hover="#dc3545">Visualizar Projeto</ButtonCard>
                                </div>
                                : null}
                        </Card>
                        <Card
                            className="rounded shadow"
                            Border="solid 2px #e50914"
                            backGroundImage={project02}
                            onMouseOver={() => handleMouseOver(1)}
                            onMouseOut={() => handleMouseOut(1)}
                        >
                            {hovered[1] ?
                                <div>
                                    <TitleCard>Netflix Clone</TitleCard>
                                    <DescriptionCard>Clone da Netflix feito em HTML, CSS e Bootstrap, juntamente com a Hcode Treinamentos.</DescriptionCard>
                                    <ButtonCard href="http://localhost/estudos/netflix-clone/" target="_blank" backGroundColor="#e50914c7" hover="#e50914">Visualizar Projeto</ButtonCard>
                                </div>
                                : null}
                        </Card>
                        <Card
                            className="rounded shadow"
                            Border="solid 2px #09d261"
                            backGroundImage={project03}
                            onMouseOver={() => handleMouseOver(2)}
                            onMouseOut={() => handleMouseOut(2)}
                        >
                            {hovered[2] ?
                                <div>
                                    <TitleCard>WhatsApp Web Clone</TitleCard>
                                    <DescriptionCard>Clone do WhatsApp feito em HTML, CSS e Bootstrap, juntamente com a Hcode Treinamentos.</DescriptionCard>
                                    <ButtonCard href="http://localhost/estudos/hcode-bootstrap/Whatsapp/" target="_blank" backGroundColor="#09d261c7" hover="#09d261">Visualizar Projeto</ButtonCard>
                                </div>
                                : null}
                        </Card>
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