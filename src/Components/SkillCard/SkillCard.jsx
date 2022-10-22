import { motion } from "framer-motion";
import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, icon,item }) => {

  return (
    <motion.article
      variants={item}
      className="flex justify-center items-center flex-col w-full cont-img-skills gap-10 overflow-hidden duration-500"
    >
      <motion.img className="image-skills" src={icon} alt={skill} />
      <h3 className=" text-tecnology font-medium">{skill}</h3>
    </motion.article>
  );
};

export default SkillCard;
