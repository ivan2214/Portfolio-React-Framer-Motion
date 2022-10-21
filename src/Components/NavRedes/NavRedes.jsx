import React from "react";
import "./NavRedes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavRedes = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/bongiovanni-ivan45/"
            className="nav-link"
            target="blanck"
          >
            <FontAwesomeIcon icon={faLinkedin} beat fade size={"lg"} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/ivan2214"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGithub} beat fade size={"lg"} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="mailto:bongiovanniivan12@gmail.com?Subject=Me%20contacto%20por%20medio%20tu%20portafolio%20y%20quisiera%20poder%20establecer%20una%20charla%20contigo"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              target="blanck"
              beat
              fade
              size={"lg"}
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://walink.co/74213e"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              target="blanck"
              beat
              fade
              size={"lg"}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavRedes;
