import React from 'react';

function Portfolio () {
    const projects = [
        {
          projectName: "Run Buddy",
          githubUrl: "https://github.com/abdallahamdy/run-buddy",
          appUrl: "https://abdallahamdy.github.io/run-buddy/"
        },
        {
          projectName: "Sports Spot",
          githubUrl: "https://github.com/abdallahamdy/sports-spot",
          appUrl: "https://abdallahamdy.github.io/sports-spot/"
        },
        {
          projectName: "Password Generator",
          githubUrl: "https://github.com/abdallahamdy/password-generator",
          appUrl: "https://abdallahamdy.github.io/password-generator/"
        },
        {
          projectName: "Note It Down",
          githubUrl: "https://github.com/abdallahamdy/note-it-down",
          appUrl: "https://desolate-cove-53348.herokuapp.com"
        },
        {
          projectName: "Weather App",
          githubUrl: "https://github.com/abdallahamdy/weatherapp",
          appUrl: "https://abdallahamdy.github.io/weatherapp/"
        },
        {
          projectName: "JS Coding Quiz",
          githubUrl: "https://github.com/abdallahamdy/js-coding-quiz",
          appUrl: "https://abdallahamdy.github.io/js-coding-quiz/"
        }
    ]
    return (
        <div className="projects-div">
            {projects.map((project) => (
                <li key={project.projectName} style={{listStyleType: "none"}} >
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                        <h5 className="card-title">{project.projectName}</h5>
                        <a href={project.githubUrl} className="card-link">Github Repo</a>
                        <a href={project.appUrl} className="card-link">App Link</a>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Portfolio;