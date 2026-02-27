import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

type HistoryItem = {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
  website?: string;
};

const Experience = () => {
  const historyItems = [...(history as HistoryItem[])].sort((left, right) => {
    const leftCurrent = left.endDate.toLowerCase().includes("present");
    const rightCurrent = right.endDate.toLowerCase().includes("present");

    if (leftCurrent && !rightCurrent) return -1;
    if (!leftCurrent && rightCurrent) return 1;
    return 0;
  });

  return (
    <section id="experience" className={styles.container} aria-label="Experience timeline">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Experience</p>
        <h2 className={styles.title}>Professional timeline with product impact</h2>
      </div>

      <ol className={styles.timeline}>
        {historyItems.map((item, index) => {
          const isCurrent = item.endDate.toLowerCase().includes("present");

          return (
          <motion.li
            key={`${item.organisation}-${index}`}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
          >
            <span className={styles.dot} aria-hidden="true" />
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.logoWrap}>
                  {item.website ? (
                    <a href={item.website} target="_blank" rel="noopener noreferrer" aria-label={`${item.organisation} website`}>
                      <img src={getImageUrl(item.imageSrc)} alt={`${item.organisation} logo`} loading="lazy" />
                    </a>
                  ) : (
                    <img src={getImageUrl(item.imageSrc)} alt={`${item.organisation} logo`} loading="lazy" />
                  )}
                </div>
                <div>
                  <div className={styles.roleRow}>
                    <h3 className={styles.role}>{item.role}</h3>
                    {isCurrent ? <span className={styles.currentBadge}>Current</span> : null}
                  </div>
                  <p className={styles.organisation}>{item.organisation}</p>
                  <p className={styles.duration}>{`${item.startDate} - ${item.endDate}`}</p>
                </div>
              </div>

              <ul className={styles.points}>
                {item.experiences.map((experience, pointIndex) => (
                  <li key={pointIndex} className={pointIndex === 0 ? styles.impactPoint : undefined}>
                    <FaCircleCheck aria-hidden="true" />
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
          );
        })}
      </ol>
    </section>
  );
};

export { Experience };
