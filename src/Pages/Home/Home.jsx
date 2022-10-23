import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";

import NavUp from "../../Components/navUp/NavUp";
import Scroll from "../../Components/Scroll/Scroll";
import About from "../About/About";
import Contacto from "../Contacto/Contacto";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./Home.css";
import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="cont-superior">
          <Scroll />
          <Nav />
          <NavUp />
          <Header />
          <Projects />
          <Skills />
          <About />
          <Contacto />
        </section>
      )}
    </>
  );
};

export default Home;
