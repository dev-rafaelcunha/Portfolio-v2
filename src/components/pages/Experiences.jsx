import { useState } from 'react';
import styled from 'styled-components';
import { GridLayout } from '../../global/GridLayout';
import moment from 'moment';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../global/FadeIn';


const Section = styled.section`
    
    background-color: #03172d;
    padding: 0 40px 80px;

    @media (max-width: 1199px) {

        height: auto;
    }
`;

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    animation: ${FadeIn} 1s ease-in-out forwards;

    @media (max-width: 1199px) {

        height: auto;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const Title = styled.h1`

    text-align: center;
    color: #fff;
    padding: 60px 0;
    margin: 0;
    animation: ${FadeIn} 1s ease-in-out forwards;
`;

const Point = styled.span`
    
    color: #f83f67;
`;

const Card = styled.div`
    
    height: 300px;
    width: 300px;
    background-color: #00000050;

    @media (max-width: 1199px) {

        margin: 0 0 2rem 0;
        height: auto;
        width: 698px;
    }
`;

const CardData = styled.div`
    
    height: 300px;
    width: 698px;
    background-color: #00000050;
    position: relative;
    padding: 1rem 2rem;

    @media (max-width: 1199px) {

        height: auto;
    }
`;

const TitleCard = styled.a`
    
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    position: relative;
    display: block;
    cursor: pointer;

    &.active {

        border-left: 4px solid #f83f67;
        padding: 1rem 1.750rem;
        color: #f83f67;
    }
`;

const TitleCardData = styled.span`
    
    color: #fff;
    font-size: 1.7rem;
    position: relative;
    display: block;

    @media (max-width: 480px) {

        font-size: 1.5rem;
    }
`;

const Date = styled.span`
    
    color: #ccc;
    padding: 1.5rem 2rem;
    font-size: 1rem;
    letter-spacing: .5px;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 688px) {

        position: inherit;
        padding: 1rem 0;
        display: block;
    }
`;

const SubtitleCardData = styled.span`
    
    color: #f83f67;
    font-size: 1.2rem;
    padding: 1rem 0;
    position: relative;
    display: block;
    font-weight: 600;

    @media (max-width: 688px) {

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
    const [activeTitleCard, setActiveTitleCard] = useState('Tork Company');

    const handleLinkClick = (card) => {
        setActiveTitleCard(card);
    };

    // Mostrar período da experiência de forma automática
    const calculateWorkPeriod = (startDate) => {
        const start = moment(startDate, 'DD/MM/YYYY');
        const end = moment(); // Data atual
        const duration = moment.duration(end.diff(start));
        const months = duration.asMonths();
        return Math.round(months) + ' Meses';
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
        <Section id="experiences">
            <GridLayout>
                <Title ref={refTitle} style={{ animationPlayState: inViewTitle ? 'running' : 'paused' }}>Experiências<Point> .</Point></Title>
                <Container ref={refContainer} style={{ animationPlayState: inViewContainer ? 'running' : 'paused' }}>
                    <Card>
                        <TitleCard
                            className={`${activeTitleCard === 'Tork Company' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('Tork Company')}>
                            Tork Company
                        </TitleCard>
                        <TitleCard
                            className={`${activeTitleCard === 'Sem Registro' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('Sem Registro')}>
                            Sem Registro
                        </TitleCard>
                    </Card>
                    {activeTitleCard === 'Tork Company' && (
                        <CardData>
                            <TitleCardData>Desenvolvedor <span className="ps-1">FullStack</span></TitleCardData>
                            <Date>{`Atualmente (${calculateWorkPeriod('10/04/2023')})`}</Date>
                            <SubtitleCardData>Tork Company</SubtitleCardData>
                            <TextCardData>
                                Desenvolvo aplicações web, manutenção nos softwares existentes e dashboards utilizando bibliotecas JavaScript. <br /><br />
                                <span className="fs-6 fw-semibold text-light">Linguagens utilizadas: <br /></span>
                                <span className="fs-6 d-block mt-1">HTML - CSS - Bootstrap - JavaScript - PHP - PostgreSQL</span>
                            </TextCardData>
                        </CardData>
                    )}
                    {activeTitleCard === 'Sem Registro' && (
                        <CardData>
                            {/* Conteúdo para o card Sem Registro */}
                        </CardData>
                    )}
                </Container>
            </GridLayout>
        </Section>
    );
}

export default Experiences;