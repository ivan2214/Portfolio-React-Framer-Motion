import { motion } from "framer-motion";
import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, icon }) => {
  return (
    <motion.article
      transition={{ duration: 2 }}
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      className="flex justify-center items-center flex-col w-100 cont-img-skills"
    >
      <motion.img
        transition={{ duration: 2 }}
        className="w-24"
        src={icon}
        alt={skill}
      />
      <h3 className="text-xl font-medium">{skill}</h3>
    </motion.article>
  );
};

export default SkillCard;
