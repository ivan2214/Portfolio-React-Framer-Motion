import React from "react";
import "./Skills.css";
import skills from "../../utils/skills";
import { motion } from "framer-motion";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.section
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      id="skills"
    >
      <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl capitalize font-bold"
      >
        <FontAwesomeIcon
          icon={faCode}
          style={{ color: "rgb(151, 182, 143)" }}
        />{" "}
        Skills
      </motion.h3>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={list}
        className="grid items-center justify-center cont-skills"
      >
        {skills.map((skill) => (
          <SkillCard
            item={item}
            key={skill.id}
            skill={skill.skill}
            icon={skill.icon}
          />
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Skills;
