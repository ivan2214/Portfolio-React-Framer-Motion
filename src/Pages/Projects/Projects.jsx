import React from "react";
import CardProject from "../../Components/CardProject/CardProject";
import "./Projects.css";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import informacion from "../../utils/informacion";
const Projects = () => {
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
        duration: 6,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.section id="projects">
      <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        className="text-4xl capitalize font-bold"
      >
        <FontAwesomeIcon
          icon={faFolderOpen}
          style={{ color: "rgb(151, 182, 143)" }}
        />{" "}
        Projects
      </motion.h3>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={list}
        transition={{ duration: 4.5, delay: 600 }}
        className="projects-cont-cards "
      >
        {informacion.map((info) => (
          <CardProject
            item={item}
            url={info.url}
            description={info.description}
            id={info.id}
            key={info.id}
            name={info.name}
            image={info.image}
            tecnology={info.tecnology}
            gitHub={info.gitHub}
          />
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Projects;
