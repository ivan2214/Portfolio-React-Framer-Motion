import React from "react";
import "./NavRedes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const NavRedes = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="" className="nav-link">
            <FontAwesomeIcon icon={faLinkedin} beat fade size={"2xl"} />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <FontAwesomeIcon icon={faGithub} beat fade size={"2xl"} />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <FontAwesomeIcon icon={faWhatsapp} beat fade size={"2xl"} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavRedes;
