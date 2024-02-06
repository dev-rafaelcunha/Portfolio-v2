import styled, { keyframes } from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import img from '../../img/photo03.jpeg';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../global/FadeIn';

const Section = styled.section`
    
    padding: 5rem;
    background-color: #03172d;
    display: flex;
    align-items: center;

    @media (max-width: 992px) {

        height: auto;
        display: flex;
        justify-content: center;
    }
`;

const Container = styled.div`
    
    background-color: #fff;
    border: 2px solid #444;
`;

const Photo = styled.img`
    
    height: 100%;
    width: 430px;
    max-width: 100%;
    border: 2px solid #999;
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;

    @media (max-width: 992px) {
        width: 320px;
        height: auto;
    }

    @media (max-width: 480px) {

        height: 300px;
    }
`;

const FirstColumn = styled.div`
    
    padding: 1.5rem 2rem;

    @media (max-width: 1199px) {

        display: flex;
        justify-content: center;
    }

    @media (max-width: 992px) {

        width: 100%;
    }
`;

const SecondColumn = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;

    @media (max-width: 992px) {

        align-items: center;
        padding: 20px 0;
    }
`;

const Title = styled.span`
    
    color: #f83f67;
    font-weight: 600;
    font-size: 22px;
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .3s;

    @media (max-width: 992px) {

        display: flex;
        justify-content: center;
    }
`;

const Name = styled.h1`
    
    font-size: 2.5rem;
    color: #444;
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .3s;

    @media (max-width: 992px) {

        display: flex;
        justify-content: center;
        font-size: 2.2rem;
    }
`;

const Description = styled.span`
    
    font-size: 1.2rem;
    color: #444;
    font-weight: 600;
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .3s;

    @media (max-width: 992px) {

        display: flex;
        justify-content: center;
    }
`;

const Text = styled.p`
    
    font-size: 1.1rem;
    color: #444;
    line-height: 1.5rem;
    letter-spacing: .5px;
    margin-top: 40px;
    margin-bottom: 0 !important;
    padding-right: 20px;
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .6s;

    @media (max-width: 992px) {

        text-align: center;
        padding: 0   20px;
    }
`;

const Social = styled.div`
    
    margin-top: 40px;
    display: flex;

    @media (max-width: 480px) {

        padding: 0 10px;
    }
`;

const Card = styled.a`
    
    padding: 17px;
    display: flex;
    border: 2px solid #999;
    align-items: center;
    font-size: 1.7rem;
    color: ${props => props.Color};
    opacity: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
    animation-delay: .9s;

    &:hover {

        color: ${props => props.Color};
        border: 2px solid ${props => props.BorderHover};
    }

    @media (max-width: 480px) {

        font-size: 1rem;
        border: 2px solid ${props => props.BorderHover};
    }
`;

const socialLinks = [
    { href: "https://www.linkedin.com/in/devrafaelcunha/", icon: <FaLinkedinIn />, className: "rounded", Color: "#0a66c2", BorderHover: "#0a66c2" },
    { href: "https://www.instagram.com/dev.rafaelcunha/", icon: <FaInstagram />, className: "rounded ms-3", Color: "#d62976", BorderHover: "#d62976" },
    { href: "https://github.com/dev-rafaelcunha", icon: <TbBrandGithubFilled />, className: "rounded ms-3", Color: "#010101", BorderHover: "#010101" },
    { href: "https://contate.me/rafaelcunha", icon: <FaWhatsapp />, className: "rounded ms-3", Color: "#13b44e", BorderHover: "#25d366" }
];

function About() {

    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: .5
    });

    return (

        <Section id="about" className="px-5">
            <GridLayout>
                <Container className="row m-0">
                    <FirstColumn className="col-5">
                        <Photo src={img} alt="Photo" className="rounded shadow" ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }} />
                    </FirstColumn>
                    <SecondColumn className="col">
                        <Title ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}>Sobre mim</Title>
                        <Name className="mt-2" ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}>Rafael Cunha</Name>
                        <Description className="mt-2" ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}>Front-End Developer</Description>
                        <Text ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                            Meu nome é <strong>Rafael Cunha</strong>, tenho 27 anos, atualmente estou trabalhando na empresa <strong>Tork Company</strong> como
                            <strong> Desenvolvedor Júnior</strong> e cursando <strong>Engenharia de Software</strong> pela <strong>UNINTER</strong>.<br /><br />
                            Passei minha vida buscando algo que realmente fizesse sentido,
                            até me deparar com o mundo de desenvolvimento, onde estou feliz, empolgado e totalmente focado, me aperfeiçoando
                            e buscando novos desafios para carreira.
                        </Text>
                        <Social>
                            {socialLinks.map((link, index) => (
                                <Card key={index} href={link.href} target="_blank" className={link.className} Color={link.Color} ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                                    {link.icon}
                                </Card>
                            ))}
                        </Social>
                    </SecondColumn>
                </Container>
            </GridLayout>
        </Section>
    );
}

export default About;