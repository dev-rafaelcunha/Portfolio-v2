import styled, { keyframes } from "styled-components";

const downBtn = keyframes`

    from {
        transform: translate3d(0, -8.75rem, 0);
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
    background-color: #f52754;
    animation: ${downBtn};
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    border: none;
    margin: 0 10%;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 40px;
    
    &:hover {
        background: transparent;
        box-shadow: none;
    }
      
    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 2px;
        width: 0;
        background: #f52754;
        transition: 400ms ease all;
    }
      
    &:after {
        right: inherit;
        top: inherit;
        left: 0;
        bottom: 0;
    }
      
      &:hover:before,
      &:hover:after {
        width: 100%;
        transition: 800ms ease all;
    }
`;

function CustomButton02({ href, target, className, text }) {

    return (

        <>
            <Button href={href} target={target} type="button" className={className}>{text}</Button>
        </>
    )
}

export default CustomButton02;