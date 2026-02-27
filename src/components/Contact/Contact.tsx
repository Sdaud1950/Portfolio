import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { ContactCard } from "./ContactCard";
import styles from "./Contact.module.css";

type ContactMethod = {
  id: "email" | "linkedin" | "github";
  label: string;
  value: string;
  href?: string;
};

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "daudshaikh821@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/daut-shaikh-3831b81b7",
    href: "https://www.linkedin.com/in/daut-shaikh-3831b81b7/",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Sdaud1950",
    href: "https://github.com/Sdaud1950",
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("daudshaikh821@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className={styles.section} aria-label="Contact section">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <span className={styles.availableBadge}>Open to Opportunities</span>
        <h2 className={styles.title}>Let’s build product experiences users actually love.</h2>
        <p className={styles.description}>
          I’m open to frontend opportunities where I can help ship reliable,
          scalable React + TypeScript interfaces with strong product impact.
        </p>

        <motion.div
          className={styles.cardGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          {contactMethods.map((method) => (
            <ContactCard
              key={method.id}
              type={method.id}
              label={method.label}
              value={method.value}
              href={method.href}
              copied={method.id === "email" && copied}
              onClick={method.id === "email" ? handleCopyEmail : undefined}
            />
          ))}
        </motion.div>

        <a
          href="mailto:daudshaikh821@gmail.com"
          className={styles.primaryCta}
          aria-label="Start conversation for potential opportunities"
        >
          Let’s Work Together
          <FaArrowRight aria-hidden="true" />
        </a>

        <p className={styles.copyStatus} role="status" aria-live="polite">
          {copied ? "Email copied to clipboard." : ""}
        </p>
      </motion.div>
    </section>
  );
};
