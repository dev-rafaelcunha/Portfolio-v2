import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import img from '../../img/photo03.jpeg';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Section = styled.section`
    
    padding: 5rem;
    background-color: #03172d;
    display: flex;
    align-items: center;

    @media (max-width: 991px) {

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
    
    height: 550px;
    width: 430px;
    max-width: 100%;

    @media (max-width: 991px) {
        width: 320px;
        height: 390px;
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
`;

const SecondColumn = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 991px) {

        padding-bottom: 20px;
        display: flex;
        align-items: center;
    }
`;

const Title = styled.span`
    
    color: #f83f67;
    font-weight: 600;
    font-size: 22px;

    @media (max-width: 991px) {

        display: flex;
        justify-content: center;
    }
`;

const Name = styled.h1`
    
    font-size: 2.5rem;
    color: #444;

    @media (max-width: 991px) {

        display: flex;
        justify-content: center;
        font-size: 2.2rem;
    }
`;

const Description = styled.span`
    
    font-size: 1.2rem;
    color: #444;
    font-weight: 600;

    @media (max-width: 991px) {

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

    @media (max-width: 991px) {

        text-align: center;
        padding: 0 20px;
    }
`;

const Social = styled.div`
    
    margin-top: 40px;
    display: flex;
    padding: 0 10px;
`;

const Card = styled.a`
    
    padding: 20px;
    background-color: #fff;
    display: flex;
    border: 1px solid #f83f67;
    align-items: center;
    font-size: 1.7rem;
    color: #f83f67;
    border-radius: 50% !important;

    &:hover {

        background-color: #f83f67;
        color: #fff;
    }

    @media (max-width: 480px) {

        font-size: 1rem;
        background-color: #f83f67;
        color: #fff;
    }
`;

const socialLinks = [
    { href: "https://www.linkedin.com/in/devrafaelcunha/", icon: <FaLinkedinIn />, className: "rounded" },
    { href: "https://www.instagram.com/dev.rafaelcunha/", icon: <FaInstagram />, className: "rounded ms-3" },
    { href: "https://github.com/dev-rafaelcunha", icon: <TbBrandGithubFilled />, className: "rounded ms-3" },
    { href: "https://contate.me/rafaelcunha", icon: <FaWhatsapp />, className: "rounded ms-3" }
];

function About() {

    return (

        <Section id="about" className="px-5">
            <GridLayout>
                <Container className="row m-0">
                    <FirstColumn className="col-lg-5">
                        <Photo src={img} alt="Photo" className="rounded shadow" />
                    </FirstColumn>
                    <SecondColumn className="col-lg">
                        <Title>Sobre mim</Title>
                        <Name className="mt-2">Rafael Cunha</Name>
                        <Description className='mt-2'>Front-End Developer</Description>
                        <Text>
                            Meu nome é <strong>Rafael Cunha</strong>, tenho 27 anos, atualmente estou trabalhando na empresa <strong>Tork Company</strong> como
                            <strong> Desenvolvedor Júnior</strong> e cursando <strong>Engenharia de Software</strong> pela <strong>UNINTER</strong>.<br /><br />
                            Passei minha vida buscando algo que realmente fizesse sentido,
                            até me deparar com o mundo de desenvolvimento, onde estou feliz, empolgado e totalmente focado, me aperfeiçoando
                            e buscando novos desafios para carreira.
                        </Text>
                        <Social>
                            {socialLinks.map((link, index) => (
                                <Card key={index} href={link.href} target="_blank" className={link.className}>
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