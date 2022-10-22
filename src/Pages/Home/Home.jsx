import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import NavRedes from "../../Components/NavRedes/NavRedes";
import NavUp from "../../Components/navUp/NavUp";
import About from "../About/About";
import Contacto from "../Contacto/Contacto";
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
      <Contacto/>
    </section>
  );
};

export default Home;
