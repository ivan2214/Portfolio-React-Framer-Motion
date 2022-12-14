import React, { useState } from "react";
import { motion } from "framer-motion";
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
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="navDontSticky stickyNav transition-all duration-700"
      >
        <motion.section
          className="navHamburger transition-all "
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon
            className={` ${open ? "iconOpen" : "iconClose"}  `}
            icon={faX}
            size="2xl"
          />

          <FontAwesomeIcon
            className={` ${open ? "iconClose" : "iconOpen"} `}
            icon={faBars}
            size="2xl"
          />
        </motion.section>

        <motion.section className={`w-10 logo `}>
          <a href="#">
            {" "}
            <img src={logo} alt="logo personal" className="personal" />
          </a>
        </motion.section>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className={`nav-container-links  ${open ? "openMenu" : "closeMenu"} `}
        >
          <motion.li variants={item} className="nav-item ">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item ">
            <a href="#skills" className="nav-link">
              skills
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item ">
            <a href="#about" className="nav-link">
              About
            </a>
          </motion.li>
          <motion.li variants={item} className="nav-item ">
            <a href="#contacto" className="nav-link button-contacto">
              <Button text="Conectemos" />
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Nav;
