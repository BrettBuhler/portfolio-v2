import React, { useEffect } from 'react'
import { useState } from 'react'
import TextWave from './TextWave'

const Hero = () => {

    const texts = ['Software Engineer', 'Full Stack Developer', 'Web Developer']
    const [index, setIndex] = useState(0)
    const [text, setText] = useState(texts[index])

    useEffect(() => {
        const interval = setInterval(()=>{
            setIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    useEffect(()=> {
        setText(texts[index])
    }, [index])

    const heroStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: '#333',
        color: '#fff',
        height: '100vh',
        fontSize: '3rem',
    }

    return (
      <TextWave />
    )
}

export default Hero