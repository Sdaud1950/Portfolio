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

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className={styles.container} aria-label="Hero section">
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowAlt} aria-hidden="true" />

      <motion.article
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.metaRow} variants={itemVariants}>
          <span className={styles.availableBadge} aria-label="Available for frontend opportunities">
            Open to Opportunities
          </span>
          <span className={styles.socialProof}>Building product-grade interfaces for B2B and SaaS teams</span>
        </motion.div>
        <motion.h1 className={styles.name} variants={titleVariants}>Daut Shaikh</motion.h1>
        <motion.h2 className={styles.role} variants={itemVariants}>I craft performant, conversion-focused React experiences for modern product companies.</motion.h2>

        <motion.p className={styles.tagline} variants={itemVariants}>
          Frontend Engineer (React + TypeScript) focused on scalable UI systems,
          smooth user journeys, and measurable product outcomes.
        </motion.p>

        <motion.p className={styles.summary} variants={itemVariants}>
          I collaborate across product, design, and engineering to ship polished,
          reliable, and enterprise-ready interfaces—from architecture to final UX quality.
        </motion.p>

        <motion.ul className={styles.credibilityStrip} aria-label="Credibility highlights" variants={itemVariants}>
          {credibilityItems.map((item) => (
            <li key={item} className={styles.credibilityItem}>{item}</li>
          ))}
        </motion.ul>

        <motion.ul className={styles.badges} aria-label="Core technology stack" variants={itemVariants}>
          {stackBadges.map((item) => (
            <li key={item} className={styles.badgeItem}>
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div className={styles.ctaRow} variants={itemVariants}>
          <Button label="View Projects" href="#projects" ariaLabel="View projects section" />
          <Button
            label="Download Resume"
            href="/Daut Shaikh Resume.pdf"
            download
            variant="glass"
            ariaLabel="Download Daut Shaikh resume"
          />
        </motion.div>
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
