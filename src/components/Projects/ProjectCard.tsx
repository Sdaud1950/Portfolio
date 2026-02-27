import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

type Project = {
  title: string;
  imageSrc: string;
  description: string;
  skills?: string[];
  demo?: string;
  github?: string;
};

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

const narrativeByTitle: Record<string, { problem: string; solution: string; impact: string }> = {
  "GetGoing (BCD Travel)": {
    problem: "Complex travel workflows required faster search, filtering, and enterprise-grade booking reliability.",
    solution: "Built scalable React + TypeScript interfaces with reusable UI patterns and structured state management.",
    impact: "Improved usability, maintainability, and platform readiness for high-volume corporate travel operations.",
  },
};

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const { title, imageSrc, description, skills = [], demo, github } = project;
  const titleId = `${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-title`;
  const descId = `${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-desc`;
  const narrative = narrativeByTitle[title] ?? {
    problem: "Needed a clean product interface to communicate value and support key user tasks.",
    solution: description,
    impact: "Delivered a more polished, user-friendly experience aligned with product goals.",
  };

  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ""}`.trim()}
      aria-labelledby={titleId}
      aria-describedby={descId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.mediaFrame}>
          <div className={styles.browserBar} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.browserTitle}>{title}</span>
          </div>

          <div className={styles.imageWrap}>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Screenshot of ${title}`}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />

            <div className={styles.overlay}>
              <div className={styles.actions}>
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                    aria-label={`Open ${title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                ) : null}

                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryBtn}
                    aria-label={`Open live demo for ${title}`}
                  >
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <h3 id={titleId} className={styles.title}>{title}</h3>
        <div id={descId} className={styles.narrative}>
          <p className={styles.narrativeLine}><strong>Problem:</strong> {narrative.problem}</p>
          <p className={styles.narrativeLine}><strong>Solution:</strong> {narrative.solution}</p>
          <p className={styles.narrativeLine}><strong>Impact:</strong> {narrative.impact}</p>
        </div>

        <ul className={styles.skills} aria-label={`${title} technologies`}>
          {skills.map((skill) => (
            <li key={`${title}-${skill}`} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.mobileActions}>
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {demo ? (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              <FaArrowUpRightFromSquare aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
          {!github && !demo ? <span className={styles.disabledBtn}>Private project</span> : null}
        </div>
      </div>
    </motion.article>
  );
};
