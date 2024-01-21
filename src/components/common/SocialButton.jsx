import styled from "styled-components";

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
`

function SocialButton( { href, target, className, text } ) {

    return (

        <>
            <Button href={href} target={target} type="button" className={className}>{text}</Button>
        </>
    )
}

export default SocialButton;