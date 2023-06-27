import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
      return (
        <nav>
          <input type="checkbox" className="menu__btn" id="menu__btn"/>
            <label htmlFor="menu__btn" className="menu__toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
              <ul className='menu__nav'>
                <li className="menu__element">
                  <Link to="/" onClick={() => document.getElementById('menu__btn').checked = false}>Start</Link>
                </li>              
                <li className="menu__element">
                  <Link to="aboutme" onClick={() => document.getElementById('menu__btn').checked = false}>About me</Link></li>
                <li className="menu__element">
                  <Link to="tools" onClick={() => document.getElementById('menu__btn').checked = false}>My tools</Link></li>
                <li className="menu__element">
                  <Link to="projects" onClick={() => document.getElementById('menu__btn').checked = false}>Projects</Link></li>
                <li className="menu__element">
                  <Link to="contact" onClick={() => document.getElementById('menu__btn').checked = false}>Contact</Link></li>
              </ul>
        </nav>
      )
}

export default Menu;