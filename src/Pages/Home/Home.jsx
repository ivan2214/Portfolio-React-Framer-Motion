import React from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import About from "../About/About";
import Projects from "../Projects/projects";
import Skills from "../Skills/Skills";
import "./Home.css";
const Home = () => {
  return (
    <section className="cont-superior">
      <Nav />
      <Header />
      <Projects />
      <Skills />
    </section>
  );
};

export default Home;
