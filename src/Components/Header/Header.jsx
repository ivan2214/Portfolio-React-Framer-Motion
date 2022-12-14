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
      <picture className="cont-img ">
        <motion.img
          /* transition={{ duration: 1.5 }}
          initial={{ opacity: 0, translateX: -200, rotateZ: 0 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          animate={{ rotateZ: 380 }} */
          transition={{ duration: 1.5, ease: "linear" }}
          initial={{ opacity: 0, translateX: -200, rotateZ: 0 }}
          animate={{ opacity: 1, translateX: 0, rotateZ: 380 }}
          exit={{ rotateZ: 0 }}
          src={img}
          width="1000"
          height="1000"
          loading="lazi"
          className="cont-img-image "
          alt=""
        />
      </picture>
      <motion.section
        transition={{ duration: 1.5, ease: "linear" }}
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="cont-texts"
      >
        <h1 className="text-5xl">Ivan Bongiovani </h1>
        <h3 className="text-2xl">Full Stack Developer</h3>
        <p>
          Especializado en el stack <strong>MERN</strong>
        </p>
      </motion.section>

      <section className="cont-arrow">
        <a href="#projects" className="arrowDown">
          <FontAwesomeIcon icon={faArrowDown} size={"2xl"} beat fade />
        </a>
      </section>
    </header>
  );
};

export default Header;
