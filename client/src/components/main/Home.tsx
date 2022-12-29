import React, { useEffect, useState } from 'react'
import LocalNews from './views/LocalNews.js'
import LocalCrime from './views/LocalCrime.jsx'
import style from "./home.module.scss"
import { cls } from '../../utils/classNames.js'

function Home() {
  return (
    <div className={cls(style.container, "grow", "full-width")}>
      <LocalNews title="Articles" />
      <LocalCrime title="Alerts" />
    </div>
  )
}

export default Home