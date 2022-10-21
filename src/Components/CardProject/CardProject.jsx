import React, { useState } from "react";
import "./CardProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const CardProject = ({ url, description, image, name, id, tecnology }) => {
  const list = {
    hidden: { opacity: 0 },

    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    
    show: { opacity: 1 },
  };

  /*
  PARA LAS SKILLS
  initial={{ rotateY: -100, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }} */

  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="card"
      >
        <motion.section className="card-cont-img">
          <motion.figure className="card-img">
            <a href={url}>
              {" "}
              <motion.img
                src={image}
                alt={description}
                className="card-img-image"
              />{" "}
            </a>
          </motion.figure>
        </motion.section>

        <motion.section className="card-body">
          <motion.section className="card-info">
            <motion.p className="title">{name}</motion.p>
            <motion.p className="subtitle">{tecnology}</motion.p>
          </motion.section>
          <motion.section className="card-buttons">
            <motion.ul
              initial="hidden"
              animate="show"
              variants={list}
              className="social-media"
            >
              <motion.li variants={item}>
                <FontAwesomeIcon
                  className="card-icons"
                  icon={faGlobe}
                  size="2x"
                />
              </motion.li>
              <motion.li variants={item}>
                <FontAwesomeIcon
                  className="card-icons"
                  icon={faGithub}
                  size="2x"
                />
              </motion.li>
            </motion.ul>
          </motion.section>
        </motion.section>
      </motion.div>
    </>
  );
};

export default CardProject;
