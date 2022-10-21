import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/codigo.png";
import { Button } from "../Button/Button";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  function scroll() {
    if (window.scrollY >= 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }

  window.addEventListener("scroll", scroll);

  return (
    <>
      <nav className={hidden ? "navDontSticky stickyNav" : "navDontSticky"}>
        <section className="navHamburger" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </section>

        <section className={`w-10 logo `}>
          <a href="#">
            {" "}
            <img src={logo} alt="logo personal" />
          </a>
        </section>
        <ul
          className={`nav-container-links ${open ? "openMenu" : "closeMenu"} `}
        >
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link button-contacto">
              <Button text="Contactemos" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
