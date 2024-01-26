import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import img from '../../img/photo03.jpeg';

const Section = styled.section`
    
    height: auto;
    padding: 5rem 0;
    background-color: #111;
`;

const Container = styled.div`
    
    background-color: #151515;
    border: 2px solid #1f1f1f;
`;

const Photo = styled.img`
    
    height: 500px;
    width: 400px;
    max-width: 100%;
    height: auto;

    @media (max-width: 991px) {
        width: 250px;
        height: 250px;
        border-radius: 50% !important;
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
    
    padding: 4rem 2rem;
`;

const Title = styled.span`
    
    color: #f83f67;
    font-size: 22px;

    @media (max-width: 991px) {

        display: flex;
        justify-content: center;
    }
`;

const Name = styled.h1`
    
    font-size: 2.5rem;

    @media (max-width: 991px) {

        display: flex;
        justify-content: center;
        font-size: 2.2rem;
    }
`;

const Description = styled.span`
    
    font-size: 1.2rem;

    @media (max-width: 991px) {

        display: flex;
        justify-content: center;
    }
`;

const Text = styled.p`
    
    font-size: 1.1rem;
    color: #9ca3af;
    line-height: 1.5rem;
    letter-spacing: .5px;
`;

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
                        <Name className="text-light mt-2">Rafael Cunha</Name>
                        <Description className='text-light mt-2'>Front-End Developer</Description>
                        <Text className="mt-5">
                            Meu nome é <strong>Rafael Cunha</strong>, tenho 27 anos, atualmente estou trabalhando na empresa <strong>Tork Company</strong> como
                            <strong> Desenvolvedor Júnior</strong> e cursando <strong>Engenharia de Software</strong> pela <strong>UNINTER</strong>.<br /><br />
                            Passei minha vida buscando algo que realmente fizesse sentido,
                            até me deparar com o mundo de desenvolvimento, onde estou feliz, empolgado e totalmente focado, me aperfeiçoando
                            e buscando novos desafios para carreira.
                        </Text>
                    </SecondColumn>
                </Container>
            </GridLayout>
        </Section>
    );
}

export default About;