import React from 'react';
import '../styles/About.css';
import aboutBackground from '../images/5435825.jpg'
import TechStack from './TechStack';

const About = () => {
  return (
    <section id="about" className="about-section" style={{background: `url(${aboutBackground})`}}>
      <div className="container">
        <div className="about-content">
          <div className="bio">
            <h3 className="bioh3">I'm Brett Buhler</h3>
            <p className='biop'>
            I'm passionate about AI and love creating intelligent web solutions. With expertise in React.js, Node.js, and Express.js, I build seamless user interfaces and scalable back-end systems. I also integrate AI functionalities, like machine learning and natural language processing, to empower businesses. Let's collaborate and create something exceptional together!
            </p>
            <p className='biop tech-biop'>See my current tech stack below, (I'm always up for learning new technologies)</p>
          </div>
        </div>
      </div>
      <div className='TechStackDiv'>
        <TechStack />
      </div>
    </section>
  );
}

export default About;