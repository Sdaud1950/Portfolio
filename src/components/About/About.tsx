import { motion } from "framer-motion";
import styles from "./About.module.css";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Enterprise Projects", value: "12+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Agile Team Sprints", value: "80+" },
];

const About = () => {
  return (
    <section id="about" className={styles.container} aria-label="About Daut Shaikh">
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>About</p>
          <h2 className={styles.title}>Engineering product-grade frontend experiences</h2>
          <p className={styles.description}>
            I am a frontend engineer focused on React and TypeScript, with proven
            delivery across SaaS and enterprise products. My work blends UI quality,
            maintainable architecture, and performance to ship features users trust.
          </p>
          <p className={styles.description}>
            I partner closely with product managers, designers, and backend teams to
            move from ideas to production with clear ownership and measurable impact.
          </p>
        </div>

        <div className={styles.statsGrid} role="list" aria-label="Professional highlights">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              role="listitem"
              className={styles.statCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <p className={styles.statValue}>{item.value}</p>
              <p className={styles.statLabel}>{item.label}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
