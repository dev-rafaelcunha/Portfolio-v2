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

    background-color: ${props => props.theme.themeColor};
    z-index: 101;
    padding: 0 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: .3s;

    &.fixed-active  {
        padding: 25px 40px;
    }

    &:not(.fixed-active) {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

const HeadingData = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {

        display: inherit !important;
    }
`;

const Name = styled.span`

    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
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