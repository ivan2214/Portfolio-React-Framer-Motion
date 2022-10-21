import React from "react";
import CardProject from "../../Components/CardProject/CardProject";
import "./Projects.css";
import informacion from "../../utils/informacion";
import { motion } from "framer-motion";
const Projects = () => {
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
