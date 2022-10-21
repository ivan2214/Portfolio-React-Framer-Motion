import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./NavUp.css";

const NavUp = () => {
  const [hidden, setHidden] = useState(false);

  function scroll() {
    if (window.scrollY >= 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }

  window.addEventListener("scroll", scroll);

  return (
    <section>
      <a href="#" className={hidden ? "dontHidden mostrar" : "dontHidden"}>
        <FontAwesomeIcon icon={faArrowUp} size={"2xl"} />
      </a>
    </section>
  );
};

export default NavUp;
