import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from "../../global/Theme";
import { useState } from 'react';
import { GridLayout } from '../../global/GridLayout';
import moment from 'moment';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../global/FadeIn';

const Section = styled.section`
    
    background-color: #03172d;
    padding: 0 40px 80px;

    @media (max-width: 1280px) {

        height: auto;
    }
`;

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    animation: ${FadeIn} 1s ease-in-out forwards;

    @media (max-width: 1280px) {

        height: auto;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const Title = styled.h1`

    text-align: center;
    color: ${props => props.theme.themeColor};
    padding: 60px 0;
    margin: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
`;

const Point = styled.span`
    
    color: ${props => props.theme.primaryColor};
`;

const Card = styled.div`
    
    
    width: 300px;
    background-color: #00000050;

    @media (max-width: 1280px) {

        margin: 0 0 2rem 0;
        height: auto;
        width: 698px;
    }
`;

const CardData = styled.div`
    
    width: 698px;
    background-color: #00000050;
    position: relative;
    padding: 1rem 2rem;
`;

const CardDataWrapper = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleCard = styled.a`
    
    color: ${props => props.theme.themeColor};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    position: relative;
    display: block;
    cursor: pointer;

    &.active {

        border-left: 4px solid ${props => props.theme.primaryColor};
        padding: 1rem 1.750rem;
        color: ${props => props.theme.primaryColor};
    }
`;

const TitleCardData = styled.span`
    
    color: ${props => props.theme.themeColor};
    font-size: 1.7rem;
    position: relative;
    display: block;

    @media (max-width: 480px) {

        font-size: 1.5rem;
    }
`;

const Date = styled.span`
    
    color: #ccc;
    font-size: 1rem;
    letter-spacing: .5px;

    @media (max-width: 768px) {

        position: inherit;
        padding: 1rem 0;
        display: block;
    }
`;

const SubtitleCardData = styled.span`
    
    color: ${props => props.theme.primaryColor};
    font-size: 1.2rem;
    padding: 1rem 0;
    position: relative;
    display: block;
    font-weight: 600;

    @media (max-width: 768px) {

        padding: 0 0 1rem 0;
    }
`;

const TextCardData = styled.span`
    
    color: #ccc;
    font-size: 1.1rem;
    padding: 7px 0;
    display: block;
`;

function Experiences() {

    // Ativar/Mostrar conteúdo ao clicar na empresa.
    const [activeTitleCard, setActiveTitleCard] = useState('Tork');

    const handleLinkClick = (card) => {
        setActiveTitleCard(card);
    };

    // Mostrar período da experiência de forma automática
    const calculateWorkPeriod = (startDate, endDate) => {
        const start = moment(startDate, 'DD/MM/YYYY');
        const end = endDate ? moment(endDate, 'DD/MM/YYYY') : moment();

        const years = end.diff(start, 'years');
        start.add(years, 'years');

        const months = end.diff(start, 'months');

        const yearText = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
        const monthText = months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : '';

        return `${yearText}${yearText && monthText ? ' e ' : ''}${monthText}`;
    };

    // Estado para ativar a animação somente quando estiver na seção.
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    const [refContainer, inViewContainer] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    return (
        <ThemeProvider theme={LightTheme}>
            <Section id="experiences">
                <GridLayout>
                    <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Experiências<Point> .</Point></Title>
                    <Container ref={refContainer} style={{ animationPlayState: inViewContainer ? 'running' : 'paused' }}>
                        <Card>
                            <TitleCard
                                className={`${activeTitleCard === 'Tork' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Tork')}>
                                Tork Company
                            </TitleCard>
                            <TitleCard
                                className={`${activeTitleCard === 'Convertr' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Convertr')}>
                                Convertr Commerce
                            </TitleCard>
                        </Card>
                        {activeTitleCard === 'Tork' && (
                            <CardData>
                                <CardDataWrapper>
                                    <TitleCardData>Desenvolvedor <span className="ps-1">FullStack</span></TitleCardData>
                                    <Date>{`Contrato finalizado. (${calculateWorkPeriod('01/04/2023', '19/04/2024')})`}</Date>
                                </CardDataWrapper>
                                <SubtitleCardData>Tork Company</SubtitleCardData>
                                <TextCardData>
                                    Desenvolvimento de aplicações web, manutenção de softwares existentes e criação de dashboards utilizando bibliotecas JavaScript. <br /><br />
                                    <span className="fs-6 fw-semibold text-light">Linguagens utilizadas: <br /></span>
                                    <span className="fs-6 d-block mt-1">HTML - CSS - Bootstrap - JavaScript - PHP - PostgreSQL</span>
                                </TextCardData>
                            </CardData>
                        )}
                        {activeTitleCard === 'Convertr' && (
                            <CardData>
                                <CardDataWrapper>
                                    <TitleCardData>Desenvolvedor <span className="ps-1">Front-end</span></TitleCardData>
                                    <Date>{`Atualmente (${calculateWorkPeriod('26/03/2024')})`}</Date>
                                </CardDataWrapper>
                                <SubtitleCardData>Convertr Commerce</SubtitleCardData>
                                <TextCardData>
                                    Desenvolvimento de e-commerces do zero, replicando fielmente os designs criados no Figma e implementando novas funcionalidades solicitadas pelos clientes em lojas existentes. <br /><br />
                                    <span className="fs-6 fw-semibold text-light">Linguagens utilizadas: <br /></span>
                                    <span className="fs-6 d-block mt-1">Vue - CSS</span>
                                </TextCardData>
                            </CardData>
                        )}
                    </Container>
                </GridLayout>
            </Section>
        </ThemeProvider>
    );
}

export default Experiences;