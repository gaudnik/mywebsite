import React, { useEffect } from "react";
import "animate.css/animate.min.css";

const AboutMe = () => {
    useEffect(() => {
        const image = document.querySelector(".aboutme__image");
        const description = document.querySelector(".aboutme__description");
        const buttons = document.querySelectorAll(".btn");
    
        image.classList.add("animate__animated", "animate__fadeInLeft");
        description.classList.add("animate__animated", "animate__fadeInRight");
    
        buttons.forEach((button) => {
          button.classList.add("btn--difference");
        });
    
        return () => {
          image.classList.remove("animate__animated", "animate__fadeInLeft");
          description.classList.remove("animate__animated", "animate__fadeInRight");
    
          buttons.forEach((button) => {
            button.classList.remove("btn--difference");
          });
        };
      }, []);

    return (
        <section className="aboutme" id="aboutme">
            <div className="aboutme__image"></div>
            <div className="aboutme__description">
                <h2>About Me</h2>
                <p className="aboutme__text">
                    I am a creative person who likes to participate in teamwork and acquire new skills. 
                    I am currently working as a freelancer on several 
                    projects but I am considering a change from freelancing to a long-term project, 
                    and preferably permanent employment.
                    I am characterized by creativity, high personal culture, resistance to stress.
                </p>
                <a
                    className="btn rounded btn--difference"
                    href="https://www.linkedin.com/in/zuzanna-gaudnik/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-brown">Open my LinkedIn</span>
                </a>
                <a
                    className="btn_mobile"
                    href="https://www.linkedin.com/in/zuzanna-gaudnik/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-brown">Open my LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

export default AboutMe;