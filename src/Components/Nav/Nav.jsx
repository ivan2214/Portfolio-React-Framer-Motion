import React, { useState } from "react";
import {motion} from "framer-motion"
import logo from "../../assets/img/codigo.png";
import { Button } from "../Button/Button";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger, faX } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  function scroll() {
    if (window.scrollY > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }

  window.addEventListener("scroll", scroll);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <nav className="navDontSticky stickyNav transition-all duration-700">
        <section
          className="navHamburger transition duration-150"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon
              className="transition-all duration-500 ease-in"
              icon={faX}
              size="2xl"
            />
          ) : (
            <FontAwesomeIcon
              className="transition-all duration-500 ease-in"
              icon={faBars}
              size="2xl"
            />
          )}
        </section>

        <section className={`w-10 logo `}>
          <a href="#">
            {" "}
            <img src={logo} alt="logo personal" className="personal" />
          </a>
        </section>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className={`nav-container-links transition-all duration-500 ease-in ${
            open ? "openMenu" : "closeMenu"
          } `}
        >
          <motion.li variants={item} className="nav-item duration-500">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item duration-500">
            <a href="#skills" className="nav-link">
              skills
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item duration-500">
            <a href="#about" className="nav-link">
              About
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item duration-500">
            <a href="#contacto" className="nav-link button-contacto">
              <Button text="Conectemos" />
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Nav;
