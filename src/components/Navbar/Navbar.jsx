import React, { useState } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={style.navbar}>
        <NavLink className={style.title} to="/">
          Portfolio
        </NavLink>
        <div className={style.menu}>
          <img
            className={style.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
               : getImageUrl("nav/menuIcon.png")
  
            }
            alt="menu-button"
            onClick={() => setMenuOpen (!menuOpen)}
          />
          <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
          onClick={()=> setMenuOpen(false)}
          >
            <li>
            <NavLink to="/about">About </NavLink>
            </li>
            <li>
            <NavLink to="/Experience">Experience </NavLink>
              {/* <a href="#experience">Experience</a> */}
            </li>
            <li>
            <NavLink to="/Projects">Projects </NavLink>

              {/* <a href="#projects">Projects</a> */}
            </li>
            <li>
            <NavLink to="/contact">Contact</NavLink>

              {/* <a href="#about">Contact</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
