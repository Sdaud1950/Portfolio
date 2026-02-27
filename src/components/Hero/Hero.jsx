import React from "react";
import styles from "./Hero.module.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Img from "../../../assets/hero/mypic.png";
// import aboutIcon from '../../Image/qq.jpg'

export const Hero = () => {
  const Contact = useNavigate();

  const HandelNavigate = () => {
    Contact("/Contact");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Daut Shaikh</h1>
        <p className={styles.description}>
          Frontend Developer with 4+ years of experience building scalable web
          applications using React.js and TypeScript. Skilled in developing
          reusable components, managing state with Redux and React Query,
          integrating APIs, and optimizing performance in Agile environments.
        </p>
        <a className={styles.contactBtn} onClick={HandelNavigate}>
          Contact Me
        </a>
      </div>
      <img src={Img} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
