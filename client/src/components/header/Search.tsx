import React from 'react'
import { FaSearch, FaArrowCircleRight } from "react-icons/fa";
import style from "./header.module.scss"

function Search() {
  return (
    <>
      <form className={style.search}>
        <FaSearch style={iconStyle} />
        <input type="search" placeholder='Nearby events..' autoFocus/>
        <button type="submit" onSubmit={(e) => e.preventDefault}>
          <FaArrowCircleRight style={iconStyle} />
        </button>
      </form>
    </>
  )
}

const iconStyle = {
  fontSize: "1.6rem",
}

export default Search