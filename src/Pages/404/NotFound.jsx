import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import imgRick from "../../assets/Projects/ricky.png";
import spaceX from "../../assets/Projects/SpaceX.png";
import todoList from "../../assets/Projects/Todolist.png";
import peliculas from "../../assets/Projects/peliculas.png";

const NotFound = () => {
  const [selectedId, setSelectedId] = useState(null);
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
    <section>
      {informacion.map((item) => (
        <motion.div
          style={{ background: "red" }}
          key={item.id}
          layoutId={item.id}
          
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NotFound;
