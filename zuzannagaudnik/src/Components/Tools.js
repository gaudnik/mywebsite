import React, { useRef } from "react";

const Tools = () => {
    const toolRef = useRef(null);

    const handleMouseEnter = () => {
      toolRef.current.style.transform = "scale(1.1)";
    };
  
    const handleMouseLeave = () => {
      toolRef.current.style.transform = "scale(1)";
    };

    return (
        <section className="tools">
            <div className="tools__container">
                <h2 className="tools__header">My tools</h2>
                <p className="tools__text">I`m a person who likes to learn and discover the unknown, so .. 
                my list of skills will increase for sure!<br/>
                My first programming language is JavaScript. When it comes to styling, Sass got my 
                attention because it uses variables, nested rules, mixins, functions and many other solutions.
            </p>
            <div className="tools__box">
          <a
            className="tools__tool"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="blank"
            ref={toolRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > </a>
          <a
            className="tools__tool"
            href="https://reactjs.org/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://babeljs.io/docs/en/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://gulpjs.com/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://webpack.js.org/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://sass-lang.com/documentation/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://docs.npmjs.com/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://firebase.google.com/docs"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://www.atlassian.com/software/jira"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://github.com/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://git-scm.com/doc"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://trello.com/pl"
            target="blank"
          > </a>
        </div>
            </div>
        </section>
    )
}

export default Tools;