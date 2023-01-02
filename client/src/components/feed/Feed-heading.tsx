import React from 'react'
import { FaSlidersH } from "react-icons/fa"

type Props = {
  title: string,
  icon: JSX.Element
}

function FeedHeading({title, icon}: Props) {
  const styledIcon = React.cloneElement(icon, {className: "text-2xl"})

  return (
    <div className="flex justify-between items-center px-4">
    <div className="flex items-center space-x-4">
      {styledIcon}
      <h2>{title}</h2>
    </div>
    <div className="text-lg">
      <FaSlidersH/>
    </div>
  </div>
  )
}

export default FeedHeading