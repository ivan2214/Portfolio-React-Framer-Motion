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
      id="contacto"
    >
      <NavRedes />
    </motion.section>
  );
};

export default Contacto;
