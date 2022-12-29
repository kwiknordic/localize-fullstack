import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { useDarkMode } from "../../hooks/ThemeContext.js"
import { CgDarkMode } from "react-icons/cg"

// Styling
import style from "./header.module.scss"
import { cls } from "../../utils/classNames.js";

function SideMenu({isMenuOpen}) {
  const [darkMode, setDarkMode] = useContext(useDarkMode);

  return (
    <div className={cls(style.sideMenu, isMenuOpen ? style.visible : style.hidden)}>
      <nav className='grow'>
        <ul>
          <li><Link to="/">Kompetens</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/">Bakgrund</Link></li>
          <li><Link to="/">Blogg</Link></li>
        </ul>
      </nav>
      <div className={style.toggleTheme} onClick={() => setDarkMode(!darkMode)}>
        <span>{darkMode ? "Dark mode" : "Light mode"}</span>
        <CgDarkMode 
          className={cls(style.icon)}
        />
      </div>
    </div>
  )
}

export default SideMenu