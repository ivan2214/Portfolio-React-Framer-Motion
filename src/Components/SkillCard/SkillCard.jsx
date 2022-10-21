import { motion } from "framer-motion";
import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, icon }) => {
  console.log(skill, icon);
  return (
    <motion.article
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex justify-center items-center flex-col w-100"
    >
      <motion.img
        whileInView={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className="w-24"
        src={icon}
        alt={skill}
      />
      <h3 className="text-xl">{skill}</h3>
    </motion.article>
  );
};

export default SkillCard;
