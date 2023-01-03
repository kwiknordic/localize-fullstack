import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { useDarkMode } from "../../hooks/ThemeContext.js"
import { CgDarkMode } from "react-icons/cg"
import style from "./header.module.scss"

type Params = { isMenuOpen: boolean }

function SideMenu({isMenuOpen}: Params) {
  const [darkMode, setDarkMode]: any = useContext(useDarkMode);
  const currentMode = darkMode ? "Dark mode" : "Light mode"

  return (
    <div className={`${style.sideMenu} ${isMenuOpen ? style.visible : style.hidden}`}>
      <nav style={{flexGrow: "1"}}>
        <ul>
          <li><Link to="/">Kompetens</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/">Bakgrund</Link></li>
          <li><Link to="/">Blogg</Link></li>
        </ul>
      </nav>
      <div className={style.toggleTheme} onClick={() => setDarkMode(!darkMode)}>
        <span>{currentMode}</span>
        <CgDarkMode className={style.icon} />
      </div>
    </div>
  )
}

export default SideMenu