import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, icon }) => {
  console.log(skill, icon);
  return (
    <article className="flex justify-center items-center flex-col w-100">
      <img src={icon} alt={skill} />
      <h3 className="text-xl">{skill}</h3>
    </article>
  );
};

export default SkillCard;
