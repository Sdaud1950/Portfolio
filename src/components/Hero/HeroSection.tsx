import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { getImageUrl } from "../../utils";
import Button from "../ui/Button/Button";

const stackBadges = ["React", "TypeScript", "Redux", "React Query", "AWS"];
const credibilityItems = [
  "4+ Years Frontend Delivery",
  "Enterprise Project: GetGoing (BCD Travel)",
  "Specialization: React + TypeScript Product Interfaces",
];

const HeroSection = () => {
  return (
    <section id="home" className={styles.container} aria-label="Hero section">
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowAlt} aria-hidden="true" />

      <motion.article
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className={styles.metaRow}>
          <span className={styles.availableBadge} aria-label="Available for frontend opportunities">
            Open to Opportunities
          </span>
          <span className={styles.socialProof}>Building product-grade interfaces for B2B and SaaS teams</span>
        </div>
        <h1 className={styles.name}>Daut Shaikh</h1>
        <h2 className={styles.role}>I craft performant, conversion-focused React experiences for modern product companies.</h2>

        <p className={styles.tagline}>
          Frontend Engineer (React + TypeScript) focused on scalable UI systems,
          smooth user journeys, and measurable product outcomes.
        </p>

        <p className={styles.summary}>
          I collaborate across product, design, and engineering to ship polished,
          reliable, and enterprise-ready interfaces—from architecture to final UX quality.
        </p>

        <ul className={styles.credibilityStrip} aria-label="Credibility highlights">
          {credibilityItems.map((item) => (
            <li key={item} className={styles.credibilityItem}>{item}</li>
          ))}
        </ul>

        <ul className={styles.badges} aria-label="Core technology stack">
          {stackBadges.map((item) => (
            <li key={item} className={styles.badgeItem}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.ctaRow}>
          <Button label="View Projects" href="#projects" ariaLabel="View projects section" />
          <Button
            label="Download Resume"
            href="/Daut-Resume.pdf"
            download
            variant="glass"
            ariaLabel="Download Daut Shaikh resume"
          />
        </div>
      </motion.article>

      <motion.aside
        className={styles.profileWrap}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <div className={styles.profileRadial} aria-hidden="true" />
        <motion.div
          className={styles.imageRing}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={getImageUrl("hero/mypic.png")}
            alt="Portrait of Daut Shaikh"
            loading="lazy"
            className={styles.profileImage}
          />
        </motion.div>
      </motion.aside>
    </section>
  );
};

export default HeroSection;
