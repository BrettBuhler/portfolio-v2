import { useState } from 'react'
import projectArray from '../services/projects'
import '../styles/Projects.css'
import projectsBackground from '../images/wallpaperflare-cropped.jpg'

const Projects = ({}) => {
    return (
        <div className='projectContainer' id='projects' style={{background: `url(${projectsBackground})`, backgroundSize: 'cover'}}>
            <div className='project-text-container'>
            <h2 className='project-h2'>Projects</h2>
            <p className='project-p'>Hover over each project to reveal a brief description, a link to the live site, a GitHub repository link, and even a video demo! For more details about a project, click on the GitHub link to access the comprehensive description in the project's README file. Enjoy exploring!</p>
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
                            <a href={project.demoLink} target='_blank' className='project-button'>Demo</a>
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