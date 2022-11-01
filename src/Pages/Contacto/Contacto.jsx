import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import NavRedes from "../../Components/NavRedes/NavRedes";
import "./Contacto.css";

const Contacto = () => {
  return (
    <motion.section
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      id="contacto"
    >
       <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl capitalize font-bold"
      >
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "rgb(151, 182, 143)" }}
        />{" "}
        Contactemos!
      </motion.h3>
      <NavRedes />
    </motion.section>
  );
};

export default Contacto;
