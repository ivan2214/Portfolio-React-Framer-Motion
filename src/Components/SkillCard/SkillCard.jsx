import { motion } from "framer-motion";
import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, icon }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.article
      transition={{ duration: 1.5 }}
      
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      className="flex justify-center items-center flex-col w-full cont-img-skills gap-10 overflow-hidden"
    >
      <motion.img
        
        className="image-skills"
        src={icon}
        alt={skill}
      />
      <h3 className=" text-tecnology font-medium">{skill}</h3>
    </motion.article>
  );
};

export default SkillCard;
