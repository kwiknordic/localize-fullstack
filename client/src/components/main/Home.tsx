import React, { useEffect, useState } from 'react'
import Posts from './views/components/Posts.js';
import style from "./home.module.scss"
import { cls } from '../../utils/classNames.js'
import { useBrottsplatskartan } from '../../api/useBrottsplatskartan.js';
import { useMitti } from '../../api/useMitti.js'

function Home() {
  const brottsplatskartan = useBrottsplatskartan()
  const mitti = useMitti({to: 25})

  return (
    <div className={cls(style.container, "grow", "full-width")}>
      <Posts title="Articles" data={mitti} />
      <Posts title="Alerts" data={brottsplatskartan} />
    </div>
  )
}

export default Home