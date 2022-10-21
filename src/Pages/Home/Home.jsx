import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import NavRedes from "../../Components/NavRedes/NavRedes";
import NavUp from "../../Components/navUp/NavUp";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <section className="cont-superior">
      <Nav />
      <NavRedes />
      <NavUp />
      <Header />
      <Projects />
      <Skills />
      <About />
    </section>
  );
};

export default Home;
