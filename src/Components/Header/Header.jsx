import React from "react";
import img from "../../assets/img/codigo.png";
import "./Header.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="cont">
      <figure className="cont-img ">
        <motion.img
          
          src={img}
          className="cont-img-image "
          alt=""
        />
      </figure>
      <section className="cont-texts">
        <h1 className="text-5xl">Ivan Bongiovani </h1>
        <h3 className="text-2xl">Full Stack Developer</h3>
        <p>
          Especializado en el stack <strong>MERN</strong>
        </p>
      </section>

      <section className="cont-arrow">
        <a href="#projects" className="arrowDown">
          <FontAwesomeIcon icon={faArrowDown} size={"2xl"} beat fade />
        </a>
      </section>
    </header>
  );
};

export default Header;
