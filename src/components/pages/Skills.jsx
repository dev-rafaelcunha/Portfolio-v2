import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from "../../global/Theme";
import { GridLayout } from '../../global/GridLayout';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript, IoMdGitMerge } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiStyledcomponents } from "react-icons/si";
import { FiTrello } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../global/FadeIn';

const Section = styled.section`
    background-color: ${props => props.theme.themeColor};
    padding: 0 40px 80px;
    @media (max-width: 1280px) {
        height: auto;
        padding-bottom: 80px;
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
`;

const Container = styled.div`
    display: flex;
    @media (max-width: 1280px) {
        height: auto;
    }
`;

const CardSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px) {
        justify-content: center;
    }
`;

const Card = styled.a`
    border: 2px solid #999;
    font-size: ${props => props.fontSize};
    height: 210px;
    width: 210px;
    color: ${props => props.theme.primaryColor};
    background-color: #03172d;
    transition: 1s all ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: ${props => props.animationDelay};
    opacity: 0;

    &:hover {
        border: 2px solid ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.themeColor};
    }

    @media (max-width: 768px) {
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
    color: ${props => props.theme.themeColor};
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
    color: ${props => props.theme.themeColor};
    font-family: 'Lucida Sans', sans-serif;
    padding: 5px 14px;
    @media (max-width: 480px) {
        display: none;
    }
`;

function Skills() {
    const skillsData = [
        { icon: <AiOutlineHtml5 />, title: "HTML5", description: "Marcação de Texto.", fontSize: "5rem", animationDelay: "0" },
        { icon: <FaCss3 />, title: "CSS3", description: "Estilização.", fontSize: "5rem", animationDelay: ".3s" },
        { icon: <BsBootstrap />, title: "Bootstrap", description: "Framework para Estilização.", fontSize: "5rem", animationDelay: ".6s" },
        { icon: <IoLogoJavascript />, title: "JavaScript", description: "Interatividade.", fontSize: "5rem", animationDelay: ".9s" },
        { icon: <FaVuejs />, title: "Vue", description: "Reatividade.", fontSize: "5rem", animationDelay: "1.2s" },
        { icon: <FaReact />, title: "React", description: "Reatividade.", fontSize: "5rem", animationDelay: "1.5s" },
        { icon: <SiStyledcomponents />, title: "Styled Components", description: "Biblioteca para Estilizar Components React.", fontSize: "8rem", animationDelay: "1.8s" },
        { icon: <FaPhp />, title: "PHP", description: "Linguagem de Programação.", fontSize: "8rem", animationDelay: "2.1s" },
        { icon: <FaDatabase />, title: "Banco de Dados", description: "MySQL e PostgreSQL", fontSize: "5rem", animationDelay: "2.4s" },
        { icon: <IoMdGitMerge />, title: "Git", description: "Versionamento de Códigos.", fontSize: "5rem", animationDelay: "2.7s" },
        { icon: <FiTrello />, title: "Trello", description: "Métodologias Ágeis", fontSize: "5rem", animationDelay: "3s" },
        { icon: '?', title: "Nova Habilidade", description: "Aguarde...", fontSize: "5rem", animationDelay: "3.3s" },
        { icon: '?', title: "Nova Habilidade", description: "Aguarde...", fontSize: "5rem", animationDelay: "3.6s" },
        { icon: '?', title: "Nova Habilidade", description: "Aguarde...", fontSize: "5rem", animationDelay: "3.9s" },
        { icon: '?', title: "Nova Habilidade", description: "Aguarde...", fontSize: "5rem", animationDelay: "4.2s" }
    ];

    const { ref: refTitle, inView: inViewTitle } = useInView({
        triggerOnce: true,
        threshold: .1,
    });

    const { ref: refSkill, inView: inViewSkill } = useInView({
        triggerOnce: true,
        threshold: .1,
    });

    return (
        <ThemeProvider theme={LightTheme}>
            <Section id="skills">
                <GridLayout>
                    <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>
                        Habilidades <b>.</b>
                    </Title>
                    <Container>
                        <CardSkills>
                            {skillsData.map((skill, index) => (
                                <Card
                                    key={index}
                                    fontSize={skill.fontSize}
                                    animationDelay={skill.animationDelay}
                                    ref={refSkill}
                                    style={{
                                        animationPlayState: inViewSkill ? 'running' : 'paused',
                                    }}
                                    className="rounded"
                                >
                                    {skill.icon}
                                    <TitleSkills>{skill.title}</TitleSkills>
                                    <DescriptionSkills>{skill.description}</DescriptionSkills>
                                </Card>
                            ))}
                        </CardSkills>
                    </Container>
                </GridLayout>
            </Section>
        </ThemeProvider>
    );
}

export default Skills;
