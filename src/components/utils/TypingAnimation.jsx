import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Typing = styled.div`
  font-size: 18px;
  letter-spacing: .5px;
  color: #555;
  width: 650px;
  padding-top: 10px;

  &::after {
    content: "|";
    opacity: 1;
    animation: ${blink} 1s infinite;
    color: #f52754;
    font-weight: bold;
    padding: 0 10px;
    font-size: 19px;
  }

  @media (max-width: 1200px) {
    padding: 15 0px;
  }

  @media (max-width: 993px) {
    width: inherit !important;
    padding: 15px;
  }
`;

function TypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const arrText = text.split('');
    let newText = '';
    arrText.forEach((letter, i) => {
      setTimeout(() => {
        newText += letter;
        setDisplayText(newText);
      }, 75 * i);
    });
  }, [text]);

  return <Typing>{displayText}</Typing>;
}

export default TypingAnimation;