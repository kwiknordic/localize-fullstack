import React from 'react'
import style from "./feed.module.scss";

type Props = {
  title: string,
  icon: JSX.Element
}

function FeedHeading({ title, icon }: Props) {
  const styledIcon = React.cloneElement(icon, { className: `${style.icon}` })

  return (
    <div className={style.header}>
      <div className={`${style.title}`}>
        {styledIcon}
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default FeedHeading