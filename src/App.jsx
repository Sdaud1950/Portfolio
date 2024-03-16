import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About.jsx"
import { Contact } from "./components/Contact/Contact.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
function App() {
  return (
    <>
      <div className={styles.App}>
      <Router>
      <>
        <Navbar />
        <Routes>z
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Experience"element={<Experience/>}/>
        </Routes>
      </>
    </Router>
      </div>
    </>
  );
}

export default App;
