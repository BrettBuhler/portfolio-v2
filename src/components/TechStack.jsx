import { useEffect, useRef, useState } from 'react'
import techArray from "../services/techStack"
import '../styles/TechStack.css'
import techStackBackground from '../images/laser-lights-light-beams-long-exposure-rays-reflection-3840x2160-4628.jpg'

const TechStack = () => {
  const techStackRef = useRef(null)
  const [isScrollBarVisible, setScrollBarVisible] = useState(false)

  return (
    <div className='tech-stack-container' style={{
      background: `url(${techStackBackground})`,
      backgroundSize: 'cover'
    }}>
      <div className={`tech-stack ${isScrollBarVisible ? 'show-scrollbar' : ''}`} ref={techStackRef}>
        <div className='tech-stack-inner'>
          {techArray.map((x, index) => (
            <div className='tech-item-card' key={index}>
              <div
                className='tech-item'
                style={{
                  background: `url(${x.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className='tech-item-name'>{x.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack