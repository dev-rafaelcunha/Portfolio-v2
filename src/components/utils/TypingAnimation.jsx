import React, { useEffect, useState } from 'react';

function TypingAnimation({ text, className }) {
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

  return <div className={className}>{displayText}</div>;
}

export default TypingAnimation;
