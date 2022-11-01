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
        staggerChildren: 0.5,
        duration: 1.5,
        ease: "linear",
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
      <motion.article
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        className="card "
      >
        <section className="card-cont-img">
          <picture className="card-img">
            <a href={url} target="blanck">
              {" "}
              <img
                width="1000"
                height="1000"
                loading="lazi"
                src={image}
                alt={description}
                className="card-img-image"
              />{" "}
            </a>
          </picture>
        </section>

        <section className="card-body">
          <section className="card-info">
            <p className="title">{name}</p>
            <p className="subtitle">{tecnology}</p>
          </section>
          <section className="card-buttons">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
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
          </section>
        </section>
      </motion.article>
    </>
  );
};

export default CardProject;
