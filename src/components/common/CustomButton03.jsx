import styled, { keyframes } from "styled-components";

const downBtn = keyframes`

    from {
        transform: translate3d(0, -10.75rem, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
`;

const Button = styled.a`

    width: 205px;
    height: 60px;
    color: #fff;
    border-radius: 5px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${downBtn};
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    background-color: #f52754;
    border: none;
    z-index: 1;
    font-weight: bold;
    letter-spacing: 1px;

    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: #da0c38;
        border-radius: 5px;
        transition: all 0.3s ease;
    }
      
    &:hover {
        color: #fff;
    }
      
    &:hover:after {
        left: 0;
        width: 100%;
    }
      
    &:active {
        top: 2px;
    }
`;

function CustomButton03({ href, target, className, text }) {

    return (

        <>
            <Button href={href} target={target} type="button" className={className}>{text}</Button>
        </>
    )
}

export default CustomButton03;