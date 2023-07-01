import React from "react";

const Projects = () => {

    return (
        <section className="projects">
            <div className="projects__description">
                <h2>Projects</h2>
                <p className="projects__text">In this project written with the React.js framework, I used react-create-app,
                     JSON server and Syntactically Awesome Style Sheets (Sass). I made this 
                     project in my free time because I like Harry Potter :). If you are too, 
                     test your knowledge!</p>
                     <a
                        className="btn rounded"
                        href="https://github.com/gaudnik"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <span className="text-brown">Open my GitHub</span>
                    </a>
                    <a
                    className="btn_mobile btn--difference"
                    href="https://www.linkedin.com/in/zuzanna-gaudnik/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-brown">Open my GitHub</span>
                </a>
            </div>
            <div className="projects__box">
            <a target="blank" href="https://harrypotter-quiz.netlify.app/">
                <div className="projects__image_1">
                    <h2 className="projects__harrypotter">Harry Potter<br/> Quiz</h2>
                </div>
            </a> 
            <a href="/testharcerski">
                <div className="projects__image_2">
                </div>
            </a> 
            </div>  
        </section>        
    )
}

export default Projects;
