import { FaSearch, FaArrowCircleRight } from "react-icons/fa";
import style from "./header.module.scss"

function Search() {
  return (
    <>
      <form className={`${style.search} rounded-corners`}>
        <FaSearch className={style.icon} />
        <input type="search" placeholder='Filtrera..' autoFocus/>
        <button type="submit" onSubmit={(e) => e.preventDefault}>
          <FaArrowCircleRight className={style.icon} />
        </button>
      </form>
    </>
  )
}

export default Search