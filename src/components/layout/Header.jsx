import Nav from "./Nav";
import styled from "styled-components";
import { GridLayout } from "../../global/GridLayout";

const Heading = styled.header`

    height: 10vh;
    background-color: #111;
`;

const Name = styled.header`

    text-decoration: none;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    position: absolute;
`;

const Logo = styled.header`

    animation: move 3s infinite ease-in-out;
    animation-duration: 2s;
    transition: 1s ease-in-out;
    position: relative;
    font-size: 30px;
    color: #f83f67;
    left: 215px;
    font-family: monospace;
    font-weight: bold;

    @keyframes move {
        0% { transform: translate(0); }
        50% { transform: translate(2px, 3px); }
        100% { transform: translate(0); }
    }
`;

function Header() {

    const name = "Rafael Cunha";
    const logo = "</>";

    return (

        <Heading className="px-5 py-3 fixed-top">
            <GridLayout>
                <div className="d-flex align-items-center justify-content-between">
                    <Name>{name}</Name>
                    <Logo>{logo}</Logo>
                    <Nav />
                </div>
            </GridLayout>
        </Heading>
    );
}

export default Header;