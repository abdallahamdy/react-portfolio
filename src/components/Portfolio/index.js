import React from 'react';

function Portfolio () {
    const projects = [
        {
          projectName: "Run Buddy",
          githubUrl: "https://github.com/abdallahamdy/run-buddy",
          appUrl: "https://abdallahamdy.github.io/run-buddy/",
          pngName: "run-buddy"
        },
        {
          projectName: "Sports Spot",
          githubUrl: "https://github.com/abdallahamdy/sports-spot",
          appUrl: "https://abdallahamdy.github.io/sports-spot/",
          pngName: "sports-spot"
        },
        {
          projectName: "Password Generator",
          githubUrl: "https://github.com/abdallahamdy/password-generator",
          appUrl: "https://abdallahamdy.github.io/password-generator/",
          pngName: "pass-gen"
        },
        {
          projectName: "Note It Down",
          githubUrl: "https://github.com/abdallahamdy/note-it-down",
          appUrl: "https://desolate-cove-53348.herokuapp.com",
          pngName: "note-it-down"
        },
        {
          projectName: "Weather App",
          githubUrl: "https://github.com/abdallahamdy/weatherapp",
          appUrl: "https://abdallahamdy.github.io/weatherapp/",
          pngName: "weather-app"
        },
        {
          projectName: "JS Coding Quiz",
          githubUrl: "https://github.com/abdallahamdy/js-coding-quiz",
          appUrl: "https://abdallahamdy.github.io/js-coding-quiz/",
          pngName: "coding-quiz"
        }
    ]
    return (
        <div className="portfolio-section">
            <h1 className="nav-title">Portfolio</h1>
            <div className="projects-div" >
                {projects.map((project) => (
                        <div className="card" key={project.projectName} style={{width: "18rem"}}>
                            <img
                                src={require(`../../assets/${category}/${i}.jpg`).default}
                                class="card-img-top"></img>
                            <div className="card-body">
                            <h5 className="card-title">{project.projectName}</h5>
                            <a href={project.githubUrl} className="card-link">Github Repo</a>
                            <a href={project.appUrl} className="card-link">App Link</a>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;