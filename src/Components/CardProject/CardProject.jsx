import React, { useState } from "react";
import "./CardProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const CardProject = ({
  url,
  gitHub,
  description,
  image,
  name,
  id,
  tecnology,
  item,
}) => {
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

  return (
    <>
      <motion.div  transition={{ duration: 1.5, delay: .5 }}
        initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }} className="card duration-500">
        <motion.section className="card-cont-img">
          <motion.figure className="card-img">
            <a href={url} target="blanck">
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
            animate="visible"
            variants={list}
            transition={{ duration: 1.5 }}
              className="social-media"
            >
              <motion.li variants={item}>
                <a href={url} target="BLANCK">
                  <FontAwesomeIcon
                    className="card-icons"
                    icon={faGlobe}
                    size="2x"
                  />
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a href={gitHub} target="BLANCK">
                  {" "}
                  <FontAwesomeIcon
                    className="card-icons"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
              </motion.li>
            </motion.ul>
          </motion.section>
        </motion.section>
      </motion.div>
    </>
  );
};

export default CardProject;
