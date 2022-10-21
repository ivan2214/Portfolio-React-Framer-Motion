import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-container-links">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">skills</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
