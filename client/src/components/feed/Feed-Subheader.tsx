import React from 'react'
/* import { FaSlidersH } from "react-icons/fa" */
import style from "./feed.module.scss";

type Props = {
  title: string,
  icon: JSX.Element
}

function SubHeader({ title, icon }: Props) {
  const styledIcon = React.cloneElement(icon, { className: `${style.icon}` })

  return (
    <div className={style.header}>
      <div className={`${style.title}`}>
        {styledIcon}
        <h2>{title}</h2>
      </div>
      {/*     <div className="text-lg">
      <FaSlidersH/>
    </div> */}
    </div>
  )
}

export default SubHeader