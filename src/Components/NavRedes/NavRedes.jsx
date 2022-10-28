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
    <nav className="">
      <ul className="nav-linksRedes">
        <li className="nav-itemRedes">
          <a
            href="https://www.linkedin.com/in/bongiovanni-ivan45/"
            className="nav-link"
            target="blanck"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"2xl"} />
          </a>
        </li>
        <li className="nav-itemRedes">
          <a
            href="https://github.com/ivan2214"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGithub} size={"2xl"} />
          </a>
        </li>
        <li className="nav-itemRedes">
          <a
            href="mailto:bongiovanniivan12@gmail.com?Subject=Me%20contacto%20por%20medio%20tu%20portafolio%20y%20quisiera%20poder%20establecer%20una%20charla%20contigo"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faEnvelope} target="blanck" size={"2xl"} />
          </a>
        </li>
        <li className="nav-itemRedes">
          <a
            href="https://walink.co/74213e"
            target="blanck"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} target="blanck" size={"2xl"} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavRedes;
