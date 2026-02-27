import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

type Project = {
  title: string;
  imageSrc: string;
  description: string;
  skills?: string[];
  demo?: string;
  github?: string;
};

export const Projects = () => {
  const orderedProjects = [...(projects as Project[])].sort((left, right) => {
    if (left.title === "GetGoing (BCD Travel)") return -1;
    if (right.title === "GetGoing (BCD Travel)") return 1;
    return 0;
  });

  return (
    <section className={styles.container} id="projects" aria-label="Projects section">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Projects</p>
        <h2 className={styles.title}>Selected work and product outcomes</h2>
      </div>

      <motion.div
        className={styles.projects}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {orderedProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </motion.div>
    </section>
  );
};
