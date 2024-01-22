import styled from 'styled-components';

const Section = styled.section`
    
    height: 65vh;
    background-color: #111;

    @media (max-width: 991px) {

        padding: 0 !important;
    }
`

function About() {

    return (

        <Section>
            <div className="grid-layout">
                <div className="d-flex align-items-center justify-content-center">
                    <h1 className="text-secondary">Sobre mim</h1>
                </div>
            </div>
        </Section>
    );
}

export default About;