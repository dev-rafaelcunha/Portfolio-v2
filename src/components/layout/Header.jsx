import Nav from "./Nav";
import styled, { keyframes } from "styled-components";
import { GridLayout } from "../../global/GridLayout";
import NavMobile from "./NavMobile";
import HeaderFixed from "../utils/HeaderFixed";

const Move = keyframes`
    
    0% { transform: translate(0); }
    50% { transform: translate(2px, 3px); }
    100% { transform: translate(0); }
`;

const Heading = styled.header`

    background-color: ${props => props.theme.primaryColor};
    z-index: 101;
    padding: 0 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: .3s;
    border-bottom: 2px solid ${props => props.theme.secondaryColor};

    &.fixed-active  {
        background-color: ${props => props.theme.themeColor};
        border: none;
        padding: 25px;
    }
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
    color: ${props => (props.fixedActive ? props.theme.secondaryColor : '#fff')};
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
    color: ${props => (props.fixedActive ? props.theme.primaryColor : props.theme.secondaryColor)};
    left: 110px;
    font-family: monospace;
    font-weight: bold;
`;

function Header() {

    const headerFixed = HeaderFixed();
    const name = "Rafael";
    const logo = "</>";

    return (

        <Heading className={headerFixed ? 'fixed-active' : ''}>
            <GridLayout>
                <HeadingData>
                    <Name fixedActive={headerFixed}>{name}</Name>
                    <Logo fixedActive={headerFixed}>{logo}</Logo>
                    <Nav />
                    <NavMobile />
                </HeadingData>
            </GridLayout>
        </Heading>
    );
}

export default Header;