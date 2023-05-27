import React, { useState, useEffect } from 'react';
import '../styles/TextWave.css';

const TextWave = () => {
  const textToRender = [
    'Hi my name is Brett Buhler',
    'I am a Full Stack Web Developer',
    'Check out my work below'
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Speed of typing (in milliseconds)
  const [pauseDuration, setPauseDuration] = useState(2000); // 1 second pause

  const nextText = () => {
    if (text.length == textToRender[index].length){
        setTypingSpeed(100)
    }
    if (!isDelete) {
      if (text === textToRender[index]) {
        setIsDelete(true);
        setTypingSpeed(pauseDuration); // Set typing speed to pause duration after rendering the complete string
      } else {
        const newText = text + textToRender[index][text.length];
        setText(newText);
      }
    } else {
      if (text === '') {
        setIsDelete(false);
        setIndex((prevIndex) => (prevIndex + 1) % textToRender.length);
        setTypingSpeed(100); // Set typing speed to 100ms for deletion
      } else {
        const newText = text.slice(0, -1);
        setText(newText);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextText();
    }, typingSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, isDelete, typingSpeed]);

  return (
    <div className='word-container'>
      <div className='word'>{text}</div>
    </div>
  );
};

export default TextWave;