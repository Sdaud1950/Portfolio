import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience.tsx";
import { Projects } from "./components/Projects/Projects.tsx";
import { Contact } from "./components/Contact/Contact.tsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
