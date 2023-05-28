import React, { useEffect } from 'react'
import { useState } from 'react'
import TextWave from './TextWave'
import backgroundImage from '../images/2400-digital-cyberspace-futuristic-purple-color-particles-wave-flowing-with-lines-and-dots-connection-technology-network-abstract-background-3d-rendering.jpg'
const Hero = () => {
    return (
    <div className='word-container' style={{backgroundImage: `url(${backgroundImage})`}}>
        <h1>Brett Buhler</h1>
        <TextWave />
    </div>
    )
}

export default Hero