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
              <li className="menu__element"><Link to="/">Start</Link></li>
              <li className="menu__element"><Link to="aboutme" >About me</Link></li>
              <li className="menu__element"><Link to="portfolio">Portfolio</Link></li>
              <li className="menu__element"><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
      )
}

export default Menu;