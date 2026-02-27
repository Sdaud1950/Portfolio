import { motion } from "framer-motion";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "glass";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  ariaLabel?: string;
  target?: "_self" | "_blank";
  rel?: string;
  download?: boolean;
};

const Button = ({
  label,
  href,
  onClick,
  variant = "primary",
  ariaLabel,
  target,
  rel,
  download,
}: ButtonProps) => {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel ?? label}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
