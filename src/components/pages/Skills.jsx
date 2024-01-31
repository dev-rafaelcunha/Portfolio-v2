import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript, IoMdGitMerge } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiStyledcomponents } from "react-icons/si";
import { FiTrello } from "react-icons/fi";

const Section = styled.section`
    
    background-color: #fff;
    padding: 0 40px 80px;

    @media (max-width: 1199px) {

        height: auto;
        padding-bottom: 80px;
    }
`;

const Title = styled.h1`

    text-align: center;
    color: #444;
    padding: 60px 0;
    margin: 0;
`;

const Container = styled.div`
    
    display: flex;

    @media (max-width: 1199px) {

        height: auto;
    }
`;

const Point = styled.span`
    
    color: #f83f67;
`;

const CardSkills = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1199px) {

        justify-content: center;
    }
`;

const Card = styled.a`
    border: 2px solid #999;
    font-size: ${props => props.fontSize};
    height: 210px;
    width: 210px;
    color: #f83f67;
    background-color: #03172d;
    transition: 1s all ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        border: 2px solid #f83f67;
        background-color: #f83f67;
        color: #fff;
    }

    @media (max-width: 767px) {
        height: 190px;
        width: 190px;
    }

    @media (max-width: 480px) {
        height: 155px;
        width: 46.6%;
        white-space: nowrap;
    }
`;

const TitleSkills = styled.span`
    
    font-size: 1rem;
    position: absolute;
    color: #fff;
    font-weight: bold;
    top: 3px;
    padding: 5px;

    @media (max-width: 480px) {
        
        display: none;
    }
`;

const DescriptionSkills = styled.span`
    
    font-size: .8rem;
    position: absolute;
    bottom: 3px;
    text-align: center;
    color: #fff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 5px 14px;

    @media (max-width: 480px) {
        
        display: none;
    }
`;

const skillsData = [
    { icon: <AiOutlineHtml5 />, title: "HTML5", description: "Marcação de Texto.", fontSize: "5rem" },
    { icon: <FaCss3 />, title: "CSS3", description: "Estilização.", fontSize: "5rem" },
    { icon: <BsBootstrap />, title: "Bootstrap", description: "Framework para Estilização.", fontSize: "5rem" },
    { icon: <IoLogoJavascript />, title: "JavaScript", description: "Interatividade.", fontSize: "5rem" },
    { icon: <FaReact />, title: "React", description: "Reatividade.", fontSize: "5rem" },
    { icon: <SiStyledcomponents />, title: "Styled Components", description: "Biblioteca para Estilizar Components React.", fontSize: "8rem" },
    { icon: <FaPhp />, title: "PHP", description: "Linguagem de Programação.", fontSize: "8rem" },
    { icon: <FaDatabase />, title: "Banco de Dados", description: "MySQL e PostgreSQL", fontSize: "5rem" },
    { icon: <IoMdGitMerge />, title: "Git", description: "Versionamento de Códigos.", fontSize: "5rem" },
    { icon: <FiTrello />, title: "Trello", description: "Métodologias Ágeis", fontSize: "5rem" }
];

function Skills() {

    return (
        <Section id="skills">
            <GridLayout>
                <Title>Habilidades<Point> .</Point></Title>
                <Container>
                    <CardSkills>
                        {skillsData.map((skill, index) => (
                            <Card key={index} fontSize={skill.fontSize} className="rounded">
                                {skill.icon}
                                <TitleSkills>{skill.title}</TitleSkills>
                                <DescriptionSkills>{skill.description}</DescriptionSkills>
                            </Card>
                        ))}
                    </CardSkills>
                </Container>
            </GridLayout>
        </Section>
    );
}

export default Skills;
