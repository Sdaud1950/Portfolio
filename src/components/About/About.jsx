import React from 'react'
import aboutIcon from '../../Image/qq.jpg'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
  
const About = () => {

  return (
    
    <section className={styles.container} id="about">

      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutIcon}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Hi there! 👋 I'm Daut Shaikh, a passionate React.js developer with a love for building engaging
               and responsive web applications. 
               With 2+ years of experience in the field,
              I thrive on creating seamless user experiences and bringing ideas to life through clean and efficient code.

              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default About