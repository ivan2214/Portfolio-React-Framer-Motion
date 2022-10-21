import React from "react";
import "./Skills.css";
import skills from "../../utils/skills";
import { motion } from "framer-motion";
import SkillCard from "../../Components/SkillCard/SkillCard";

const Skills = () => {
  return (
    <section id="skills">
      <motion.h3
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl capitalize"
      >
        Skill
      </motion.h3>

      <section className="grid w-100 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-24  items-center justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill.skill} icon={skill.icon} />
        ))}
      </section>
    </section>
  );
};

export default Skills;
