import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from "../../global/Theme";
import { GridLayout } from "../../global/GridLayout";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

const Foot = styled.div`
    
    padding: 1.5rem 40px;
    background-color: #03172d;
    white-space: nowrap;

    @media (max-width: 768px) {

        padding: 2rem 3%;
    }
`;

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {

        justify-content: center;
    }
`;

const Name = styled.span`
    
    color: ${props => props.theme.primaryColor};
    font-weight: 600;
`;

const React = styled.span`
    
    color: ${props => props.theme.primaryColor};
    display: flex;
    font-size: 1.2rem;
`;

const StyledComponents = styled.span`
    
    color: ${props => props.theme.primaryColor};
    font-size: 2.4rem;
    padding-left: 15px;
`;

const Bootstrap = styled.span`
    
    color: ${props => props.theme.primaryColor};
    font-size: 1.2rem;
    padding-left: 15px;
`;

const VersionNumber = styled.span`
    
    color: ${props => props.theme.primaryColor};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;

    @media (max-width: 768px) {

        display: none;
    }
`;

const Version = styled.span`
  
  font-size: .9rem;
`;

const Tecs = styled.div`
    
    display: flex;
    align-items: center;
    background-color: #00000050;
    pointer-events: none;
    padding: 0 30px;
    line-height: 0;

    @media (max-width: 768px) {

        display: none;
    }
`;

function Footer() {

    return (

        <ThemeProvider theme={LightTheme}>
            <Foot>
                <GridLayout>
                    <Container>
                        <Tecs className="badge btn">
                            <React><FaReact /></React>
                            <StyledComponents><SiStyledcomponents /></StyledComponents>
                            <Bootstrap><BsBootstrap /></Bootstrap>
                        </Tecs>
                        <div>
                            <span className="text-light fw-normal">Copyright &copy; 2024 <Name>Rafael Cunha.</Name><span className="d-sm-inline-flex d-none ps-2 fw-normal">Todos os direitos reservados.</span></span>
                        </div>
                        <div>
                            <VersionNumber><Version className="text-light pe-1 fw-normal">v</Version>2.0</VersionNumber>
                        </div>
                    </Container>
                </GridLayout>
            </Foot>
        </ThemeProvider>
    );
}

export default Footer;