import React from "react";
import "./Skills.css";
import skills from "../../utils/skills";
import { motion } from "framer-motion";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills">
      <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl capitalize font-bold"
      >
        <FontAwesomeIcon
          icon={faCode}
          style={{ color: "rgb(151, 182, 143)" }}
        />{" "}
        Skills
      </motion.h3>

      <section className="grid w-100 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-24  items-center justify-center cont-skills">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill.skill} icon={skill.icon} />
        ))}
      </section>
    </section>
  );
};

export default Skills;
