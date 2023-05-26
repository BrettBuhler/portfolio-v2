import React, { useEffect } from 'react'
import { useState } from 'react'

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
        background: '#333',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '3rem',
    }

    return (
        <div style={heroStyles}>
            <h1>Brett Buhler</h1>
            <div className="text-transition">
                <span className="text" key={text}>{text}</span>
            </div>
        </div>
    )
}

export default Hero