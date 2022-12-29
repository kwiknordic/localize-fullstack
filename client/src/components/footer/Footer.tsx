import React from 'react'

// Styling
import { cls } from "../../utils/classNames.js";
import style from "./footer.module.scss"

function Footer() {
  return (
    <footer id={style.footer} className={style.container} >
    <div className={style.content}>
      <a href="/" className={style.logo}>Localize</a>
      <span>lala</span>
    </div>
    </footer>
  )
}

export default Footer