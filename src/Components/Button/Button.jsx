import React from "react";
import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export const Button = ({text}) => {
  return (
    <button className="cssbuttons-io">
      <span>
      <FontAwesomeIcon icon={faCode}/>
        {text}
      </span>
    </button>
  );
};
