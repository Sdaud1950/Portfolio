import { motion } from "framer-motion";
import skills from "../../data/Skill.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";

type Skill = {
  title: string;
  imageSrc: string;
};

const categoryMap: Record<string, string> = {
  HTML: "Frontend",
  CSS: "Frontend",
  JavaScript: "Frontend",
  TypeScript: "Frontend",
  React: "Frontend",
  Redux: "State Management",
  GraphQL: "State Management",
  "Material UI": "UI Systems",
  Bootstrap: "UI Systems",
  WordPress: "UI Systems",
  Git: "Tools",
  Jira: "Tools",
  Azure: "Tools",
};

const categoryOrder = ["Frontend", "State Management", "UI Systems", "Tools"];

const groupedSkills = (skills as Skill[]).reduce<Record<string, Skill[]>>((acc, skill) => {
  const category = categoryMap[skill.title] ?? "Tools";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skill);
  return acc;
}, {});

const orderedGroups = categoryOrder
  .filter((category) => groupedSkills[category]?.length)
  .map((category) => [category, groupedSkills[category]] as const);

const Skills = () => {
  return (
    <section id="skills" className={styles.container} aria-label="Technical skills">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Skills</p>
        <h2 className={styles.title}>Technical toolkit for product-focused delivery</h2>
      </div>

      <div className={styles.grid}>
        {orderedGroups.map(([category, items], categoryIndex) => (
          <motion.article
            key={category}
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.08, ease: "easeOut" }}
          >
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.skillList}>
              {items.map((skill) => (
                <li key={skill.title} className={styles.skillItem}>
                  <div className={styles.iconWrap} aria-label={skill.title} title={skill.title}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} loading="lazy" />
                    <span className={styles.tooltip}>{skill.title}</span>
                  </div>
                  <p>{skill.title}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
