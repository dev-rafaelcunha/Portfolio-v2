import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript, IoMdGitMerge } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiStyledcomponents } from "react-icons/si";
import { FiTrello } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../global/FadeIn';

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
    animation: ${FadeIn} 1s ease-in-out forwards;
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
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: ${props => props.AnimationDelay};
    opacity: 0;

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

function Skills() {

    const skillsData = [
        { icon: <AiOutlineHtml5 />, title: "HTML5", description: "Marcação de Texto.", fontSize: "5rem", AnimationDelay: "1s" },
        { icon: <FaCss3 />, title: "CSS3", description: "Estilização.", fontSize: "5rem", AnimationDelay: "1.3s" },
        { icon: <BsBootstrap />, title: "Bootstrap", description: "Framework para Estilização.", fontSize: "5rem", AnimationDelay: "1.6s" },
        { icon: <IoLogoJavascript />, title: "JavaScript", description: "Interatividade.", fontSize: "5rem", AnimationDelay: "1.9s" },
        { icon: <FaReact />, title: "React", description: "Reatividade.", fontSize: "5rem", AnimationDelay: "2.2s" },
        { icon: <SiStyledcomponents />, title: "Styled Components", description: "Biblioteca para Estilizar Components React.", fontSize: "8rem", AnimationDelay: "1.9s" },
        { icon: <FaPhp />, title: "PHP", description: "Linguagem de Programação.", fontSize: "8rem", AnimationDelay: "2.2s" },
        { icon: <FaDatabase />, title: "Banco de Dados", description: "MySQL e PostgreSQL", fontSize: "5rem", AnimationDelay: "2.5s" },
        { icon: <IoMdGitMerge />, title: "Git", description: "Versionamento de Códigos.", fontSize: "5rem", AnimationDelay: "2.8s" },
        { icon: <FiTrello />, title: "Trello", description: "Métodologias Ágeis", fontSize: "5rem", AnimationDelay: "3.1s" }
    ];

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    const [refHtml, inViewHtml] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refCss, inViewCss] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refBootstrap, inViewBootstrap] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refJavascript, inViewJavascript] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refReact, inViewReact] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refStyledComponents, inViewStyledComponents] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refPhp, inViewPhp] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refDatabase, inViewDatabase] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refGit, inViewGit] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refTrello, inViewTrello] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    skillsData[0].ref = refHtml;
    skillsData[0].style = { animationPlayState: inViewHtml ? 'running' : 'paused' };

    skillsData[1].ref = refCss;
    skillsData[1].style = { animationPlayState: inViewCss ? 'running' : 'paused' };

    skillsData[2].ref = refBootstrap;
    skillsData[2].style = { animationPlayState: inViewBootstrap ? 'running' : 'paused' };

    skillsData[3].ref = refJavascript;
    skillsData[3].style = { animationPlayState: inViewJavascript ? 'running' : 'paused' };

    skillsData[4].ref = refReact;
    skillsData[4].style = { animationPlayState: inViewReact ? 'running' : 'paused' };

    skillsData[5].ref = refStyledComponents;
    skillsData[5].style = { animationPlayState: inViewStyledComponents ? 'running' : 'paused' };

    skillsData[6].ref = refPhp;
    skillsData[6].style = { animationPlayState: inViewPhp ? 'running' : 'paused' };

    skillsData[7].ref = refDatabase;
    skillsData[7].style = { animationPlayState: inViewDatabase ? 'running' : 'paused' };

    skillsData[8].ref = refGit;
    skillsData[8].style = { animationPlayState: inViewGit ? 'running' : 'paused' };

    skillsData[9].ref = refTrello;
    skillsData[9].style = { animationPlayState: inViewTrello ? 'running' : 'paused' };

    return (
        <Section id="skills">
            <GridLayout>
                <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Habilidades<Point> .</Point></Title>
                <Container>
                    <CardSkills>
                        {skillsData.map((skill, index) => (
                            <Card key={index} fontSize={skill.fontSize} AnimationDelay={skill.AnimationDelay} className="rounded" ref={skill.ref} style={skill.style}>
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