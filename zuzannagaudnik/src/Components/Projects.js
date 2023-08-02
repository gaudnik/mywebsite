import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.min.css";

const Projects = () => {
  const navigate = useNavigate();

  const handleTestHarcerskiClick = () => {
    navigate("/testharcerski");
  };

  return (
    <section className="projects">
      <div className="projects__description animate__animated animate__fadeInRight">
        <h2>Projects</h2>
        <p className="projects__text">
          On this page, you can find my projects/creations.
          <br />
          If you want to see more of my code, check out my GitHub.
        </p>
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
          href="https://github.com/gaudnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-brown">Open my GitHub</span>
        </a>
      </div>
      <div className="projects__box animate__animated animate__fadeInLeft">
        <a target="blank" href="https://harrypotter-quiz.netlify.app/">
          <div className="projects__image_1">
            <h2 className="projects__harrypotter">Harry Potter<br /> Quiz</h2>
          </div>
        </a>
        <a>
          <div className="projects__image_2" onClick={handleTestHarcerskiClick}></div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
