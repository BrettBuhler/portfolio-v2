import { useState } from 'react'
import projectArray from '../services/projects'

const Projects = ({}) => {
    return (
        <div className='projectContainer'>
            <h2>Responsive Flip Cards</h2>
            {projectArray.map((project, i) => 
            <div className="boxesContainer" key={project.name + i.toString()}>
                <div className="cardBox">
                    <div className="card">
                    <div className="front" style={{
                        background: `url(${project.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                         
                        <strong className='flipIcon'>&#x21bb;</strong>
                    </div>
                    <div className="back" style={{background: project.color}}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.liveLink} target='_blank'>Live Site</a>
                        <a href={project.gitHubLink} target='_blank'>GitHub</a>
                    </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Projects