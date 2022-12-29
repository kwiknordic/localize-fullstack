import React from 'react'

import { FaSlidersH } from "react-icons/fa"

function Heading({title, icon}) {
  return (
    <div className="flex justify-between items-center px-4">
    <div className="flex items-center space-x-4">
      {icon}
      <h2>{title}</h2>
    </div>
    <div className="text-lg">
      <FaSlidersH/>
    </div>
  </div>
  )
}

export default Heading