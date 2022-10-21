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
      <figure className="cont-img">
        <motion.img
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          src={img}
          className="cont-img-image"
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
      <section className="cont-redes">
        <a
          href="https://www.linkedin.com/in/bongiovanni-ivan45/"
          target="BLANCK"
        >
          <FontAwesomeIcon icon={faLinkedin} bounce size={"xl"} />
        </a>
        <a href="https://github.com/ivan2214" target="BLANCK">
          <FontAwesomeIcon icon={faGithub} bounce size={"xl"} />
        </a>
      </section>

      <section className="cont-arrow">
        <a href="#projects">
          <FontAwesomeIcon icon={faArrowDown} size={"xl"} beat fade />
        </a>
      </section>
    </header>
  );
};

export default Header;
