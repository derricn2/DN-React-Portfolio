import React from 'react';

const Project = ({ title, imageUrl, deployedLink, githubLink }) => {
    return (
        // creates container for each project
        <div className='project'>
            {/* diplays project image */}
            <img src={imageUrl} alt={title} />
            {/* diplays project title */}
            <h3>{title}</h3>
            {/* display link to deployed app */}
            <p>Visit: <a href={deployedLink} target='_blank' rel='noopener noreferrer'>Deployed Link</a></p>
            <p>Github: <a href={githubLink} target='_blank' rel='noopener noreferrer'>GitHub Repository</a></p>
        </div>
    );
};

export default Project;

