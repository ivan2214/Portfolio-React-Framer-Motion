import React from "react";
import CardProject from "../../Components/CardProject/CardProject";
import "./Projects.css";
import imgRick from "../../assets/Projects/ricky.png";
import spaceX from "../../assets/Projects/SpaceX.png";
import todoList from "../../assets/Projects/Todolist.png";
import peliculas from "../../assets/Projects/peliculas.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const informacion = [
    {
      id: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
      name: "App De Peliculas",
      image: peliculas,
      tecnology: "React ChakraIu Css HTML",
      url: "https://app-de-pelis.netlify.app/",
      gitHub: "https://github.com/ivan2214/App-De-Pelis",
    },
    {
      id: "2",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "App De Lista de tareas",
      image: todoList,
      tecnology: "React ChakraIu Css HTML",
      url: "https://tareas-ivan.netlify.app",
      gitHub: "https://github.com/ivan2214/Todo-List",
    },
    {
      id: "3",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
      name: "App De Rick and Morty",
      image: imgRick,
      tecnology: "React ChakraIu Css HTML",
      url: "https://rick-and-morty-ivan.netlify.app",
      gitHub:
        "https://github.com/ivan2214/RickAndMorty-Api-Practica-con-React-",
    },
    {
      id: "4",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      name: "App de SpaceX",
      image: spaceX,
      tecnology: "React ChakraIu Css HTML",
      url: "https://misiones-space-x.netlify.app",
      gitHub: "https://github.com/ivan2214/React-SapceX-Api",
    },
  ];
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
        transition={{ duration: 1 }}
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        className="text-4xl capitalize font-bold"
      >
        <FontAwesomeIcon
          icon={faFolderOpen}
          style={{ color: "rgb(151, 182, 143)" }}
        />
        Projects
      </motion.h3>

      <motion.section className="projects-cont-cards ">
        {informacion?.map((info) => (
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
