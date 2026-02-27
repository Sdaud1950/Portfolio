import { motion } from "framer-motion";
import { FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from "./ContactCard.module.css";

type ContactType = "email" | "linkedin" | "github";

type ContactCardProps = {
  type: ContactType;
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
  copied?: boolean;
};

const iconByType = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export const ContactCard = ({ type, label, value, href, onClick, copied = false }: ContactCardProps) => {
  const Icon = iconByType[type];

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.26, ease: "easeInOut" }}
        aria-label={`Open ${label}: ${value}`}
      >
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon />
        </span>
        <div className={styles.content}>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.26, ease: "easeInOut" }}
      aria-label={`Copy ${label}: ${value}`}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <Icon />
      </span>
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
      <span className={styles.copyBadge} aria-hidden="true">
        {copied ? <FaCheck /> : <FaCopy />}
      </span>
    </motion.button>
  );
};
