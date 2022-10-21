import React from "react";
import CardProject from "../../Components/CardProject/CardProject";
import "./Projects.css";
import imgRick from "../assets/Projects/ricky.png";
import spaceX from "../assets/Projects/SpaceX.png";
import todoList from "../assets/Projects/Todolist.png";
import peliculas from "../assets/Projects/peliculas.png";
import { motion } from "framer-motion";
const Projects = () => {
  const informacion = [
    {
      id: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
      name: "App De Peliculas",
      image: peliculas,
      tecnology: "React ChakraIu Css HTML",
    },
    {
      id: "2",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "App De Lista de tareas",
      image: todoList,
      tecnology: "React ChakraIu Css HTML",
    },
    {
      id: "3",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
      name: "App De Rick and Morty",
      image: imgRick,
      tecnology: "React ChakraIu Css HTML",
    },
    {
      id: "4",
      description:
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      name: "App de SpaceX",
      image: spaceX,
      tecnology: "React ChakraIu Css HTML",
    },
  ];

  return (
    <section id="projects">
      <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl capitalize"
      >
        projects
      </motion.h3>

      <section className="projects-cont-cards sm:gap-32 md:gap-28 lg:gap-10">
        {informacion.map((info) => {
          return (
            <CardProject
              url={info.url}
              description={info.description}
              id={info.id}
              key={info.id}
              name={info.name}
              image={info.image}
              tecnology={info.tecnology}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
