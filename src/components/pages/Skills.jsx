import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript, IoMdGitMerge } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiStyledcomponents } from "react-icons/si";
import { FiTrello } from "react-icons/fi";

const Section = styled.section`
    
    background-color: #fffbfb;
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
        height: 150px;
        width: 150px;
    }
`;

const TitleSkills = styled.span`
    
    font-size: 1rem;
    position: absolute;
    color: #fff;
    font-weight: bold;
    top: 3px;

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

    @media (max-width: 480px) {
        
        display: none;
    }
`;

function Skills() {
    return (
        <Section id="skills">
            <GridLayout>
                <Title>Habilidades<Point> .</Point></Title>
                <Container>
                    <CardSkills>
                        <Card fontSize="5rem" className="rounded"><AiOutlineHtml5 /><TitleSkills>HTML5</TitleSkills><DescriptionSkills>Marcação de Texto.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><FaCss3 /><TitleSkills>CSS3</TitleSkills><DescriptionSkills>Estilização.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><BsBootstrap /><TitleSkills>Bootstrap</TitleSkills><DescriptionSkills>Framework para Estilização.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><IoLogoJavascript /><TitleSkills>JavaScript</TitleSkills><DescriptionSkills>Interatividade.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><FaReact /><TitleSkills>ReactJS</TitleSkills><DescriptionSkills>Reatividade.</DescriptionSkills></Card>
                        <Card fontSize="8rem" className="rounded"><SiStyledcomponents /><TitleSkills>Styled Components</TitleSkills><DescriptionSkills>Biblioteca para estilizar components React.</DescriptionSkills></Card>
                        <Card fontSize="8rem" className="rounded"><FaPhp /><TitleSkills>PHP</TitleSkills><DescriptionSkills>Linguagem de Programação.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><FaDatabase /><TitleSkills>Banco de Dados</TitleSkills><DescriptionSkills>MySQL e PostgreSQL.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><IoMdGitMerge /><TitleSkills>Git</TitleSkills><DescriptionSkills>Versionamento de Códigos.</DescriptionSkills></Card>
                        <Card fontSize="5rem" className="rounded"><FiTrello /><TitleSkills>Trello</TitleSkills><DescriptionSkills>Métodologias Ágeis</DescriptionSkills></Card>
                    </CardSkills>
                </Container>
            </GridLayout>
        </Section>
    );
}

export default Skills;
