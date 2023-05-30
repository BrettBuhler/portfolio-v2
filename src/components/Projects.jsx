import { useState } from 'react'
import projectArray from '../services/projects'
import '../styles/Projects.css'
import projectsBackground from '../images/wallpaperflare-cropped.jpg'

const Projects = ({}) => {
    return (
        <div className='projectContainer' id='projects' style={{background: `url(${projectsBackground})`, backgroundSize: 'cover'}}>
            <div className='project-text-container'>
            <h2 className='project-h2'>Projects</h2>
            <p className='project-p'>Hover over (tap on mobile) a project to see a brief description, link to the live site, link to the GitHub repo, and a link to a video demo. If you want to learn more about a project, follow the GitHub link and you will find a detailed description in the project's read me.</p>
            </div>
            <div className='projects-holder'>
            {projectArray.map((project, i) => 
                <div className="cardBox" key={project.name + i.toString()}>
                    <div className="card">
                    <div className="front" style={{
                        background: `url(${project.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                         
                        <strong className='flipIcon'>&#x21bb;</strong>
                    </div>
                    <div className="back" style={{background: project.color}}>
                        <h3 className='card-h3'>{project.name}</h3>
                        <p className='card-p'>{project.description}</p>
                        <p className='card-p'>{project.tech}</p>
                        <div className='button-container'>
                            <a href={project.liveLink} target='_blank' className='project-button'>Live Site</a>
                            <a href={project.gitHubLink} target='_blank' className='project-button'>GitHub</a>
                            <a href={project.gitHubLink} target='_blank' className='project-button'>Demo</a>
                        </div>
                    </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Projects