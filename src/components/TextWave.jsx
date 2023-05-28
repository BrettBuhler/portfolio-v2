import React, { useState, useEffect } from 'react'
import '../styles/TextWave.css'

const TextWave = () => {
  const textToRender = [
    'Hi, I\'m a Full Stack Web Developer',
    'Check out my work below',
    'Thank you for the visit!'
  ];
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDelete, setIsDelete] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [pauseDuration, setPauseDuration] = useState(2000)

  const nextText = () => {
    if (text.length == textToRender[index].length){
        setTypingSpeed(100)
    }
    if (!isDelete) {
      if (text === textToRender[index]) {
        setIsDelete(true);
        setTypingSpeed(pauseDuration)
      } else {
        const newText = text + textToRender[index][text.length];
        setText(newText);
      }
    } else {
      if (text === '') {
        setIsDelete(false)
        setIndex((prevIndex) => (prevIndex + 1) % textToRender.length)
        setTypingSpeed(100)
      } else {
        const newText = text.slice(0, -1)
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
      <div className='word'>{text}</div>
  )
}

export default TextWave