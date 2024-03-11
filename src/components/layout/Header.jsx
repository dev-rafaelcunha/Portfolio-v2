import Nav from "./Nav";
import styled, { keyframes } from "styled-components";
import { GridLayout } from "../../global/GridLayout";
import NavMobile from "./NavMobile";

const Move = keyframes`
    
    0% { transform: translate(0); }
    50% { transform: translate(2px, 3px); }
    100% { transform: translate(0); }
`;

const Heading = styled.header`

    background-color: ${props => props.theme.themeColor};
    z-index: 101;
    padding: 25px;
`;

const HeadingData = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 993px) {

        display: inherit !important;
    }
`;

const Name = styled.span`

    text-decoration: none;
    color: #444;
    font-size: 30px;
    font-weight: bold;
    font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    position: absolute;
`;

const Logo = styled.span`

    animation: ${Move} ease-in-out infinite;
    animation-duration: 2s;
    transition: 3s ease-in-out;
    position: relative;
    font-size: 30px;
    color: ${props => props.theme.primaryColor};
    left: 110px;
    font-family: monospace;
    font-weight: bold;
`;

function Header() {

    const name = "Rafael";
    const logo = "</>";

    return (

        <Heading className="fixed-top">
            <GridLayout>
                <HeadingData>
                    <Name>{name}</Name>
                    <Logo>{logo}</Logo>
                    <Nav />
                    <NavMobile />
                </HeadingData>
            </GridLayout>
        </Heading>
    );
}

export default Header;