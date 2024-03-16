import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { BsTelephone } from "react-icons/bs";


export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me!</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:daudshaikh821@gmail.com">daudshaikh821@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/daut-shaikh-3831b81b7/">linkedin.com/Daut-Shaikh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Sdaud1950">github.com/Sdaud1950</a>
        </li>
      </ul>
    </footer>

        </>
  );
};
