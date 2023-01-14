import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { useDarkMode } from "../hooks/ThemeContext.js"
import { CgDarkMode } from "react-icons/cg"
import style from "./sidemenu.module.scss"

type Params = { isMenuOpen: boolean }
type HandleFeedFunc = (
  event: React.ChangeEvent<HTMLInputElement>,
  id: string
) => void

const handleFeed: HandleFeedFunc = (event, id) => {
  const feed = document.querySelector(`#${id}`)
  if (!feed) return

  if (event.target.checked) {
  }

  if (!event.target.checked) {
    event.target.checked = false
    feed.remove()
  }
}

function SideMenu({ isMenuOpen }: Params) {
  const [darkMode, setDarkMode]: any = useContext(useDarkMode);
  const currentMode = darkMode ? "Mörkt läge" : "Ljust läge"

  return (
    <div className={`${style.sideMenu} ${isMenuOpen ? style.visible : style.hidden}`}>
      <div className={style.toggleFeed}>
        <input onChange={(event) => { handleFeed(event, "articleFeed") }} type="checkbox" checked />
        <span>Artiklar</span>
      </div>
      <div className={style.toggleTheme} onClick={() => setDarkMode(!darkMode)}>
        <span>{currentMode}</span>
        <CgDarkMode className={style.icon} />
      </div>
    </div>
  )
}

export default SideMenu