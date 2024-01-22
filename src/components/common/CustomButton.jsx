import styled, { keyframes } from "styled-components";

const downBtn = keyframes`

    from {
        transform: translate3d(0, -6.75rem, 0);
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
    background: transparent;
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
    background-color: #f52754;
    animation: ${downBtn};
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    background-color: #f52754;
    background-image: linear-gradient(315deg, #f52754 0%, #f52754 74%);
    border: none;
    z-index: 1;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: 5px;
        background-color: #f52754;
        background-image: linear-gradient(315deg, #da0c38 0%, #da0c38 74%);
        transition: ease-in-out 0.3s;
    }

    &:hover {
        color: #fff;
    }
      
    &:hover:after {
        top: 0;
        height: 100%;
    }
      
    &:active {
        top: 2px;
    }

    @keyframes downBtn {
        
`;

function CustomButton({ href, target, className, text }) {

    return (

        <>
            <Button href={href} target={target} type="button" className={className}>{text}</Button>
        </>
    )
}

export default CustomButton;