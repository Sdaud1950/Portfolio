import { useEffect, useMemo, useState, type MouseEvent } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

type NavItem = {
  id: string;
  label: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);


  const navItems: NavItem[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-35% 0px -45% 0px",
      }
    );

    navItems.forEach((item) => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [navItems]);

  const onNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  // theme logic is handled inside <ThemeToggle />

  return (
    <header className={`${style.header} ${isScrolled ? style.headerScrolled : ""}`}>
      <nav className={style.navbar} aria-label="Main navigation">
        <a href="#home" className={style.title} onClick={(event) => onNavigate(event, "home")}>
          Portfolio
        </a>

        {/* theme toggle component */}
        <ThemeToggle />

        <div className={style.menu}>
          <button
            type="button"
            className={style.menuBtn}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img
              src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
              alt=""
            />
          </button>

          <ul className={`${style.menuItems} ${menuOpen ? style.menuOpen : ""}`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${style.navLink} ${isActive ? style.active : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) => onNavigate(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
