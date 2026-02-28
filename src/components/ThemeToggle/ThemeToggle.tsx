import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";
import { FC } from "react";

const SunIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M12 4.5a1 1 0 0 1 0-2 1 1 0 0 1 0 2zm0 15a1 1 0 0 1 0-2 1 1 0 0 1 0 2zm7.071-7.071a1 1 0 0 1 1.414-1.414 1 1 0 0 1-1.414 1.414zM4.515 12.929a1 1 0 0 1 1.414-1.414 1 1 0 0 1-1.414 1.414zM17.657 6.343a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414zM6.343 17.657a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const MoonIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
  </svg>
);

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
