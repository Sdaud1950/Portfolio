import React from "react";
import styles from "./Hero.module.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Img from "../../../assets/hero/profile-pic.png"

export const Hero = () => {
  const Contact= useNavigate()

const HandelNavigate=()=>{
  Contact('/Contact')
}

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} >I'M Daut Shaikh</h1>
        <p className={styles.description}>
        Associate Frontend Developer with 2+ years of experience. I
          specialise in ReactJS, HTML, CSS, and JavaScript.
        </p>
        <a className={styles.contactBtn} onClick={HandelNavigate}>
          Contact Me
        </a>
      </div>
      <img
        src={Img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
