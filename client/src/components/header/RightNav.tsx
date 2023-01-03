import { FaBars, FaRegWindowClose } from "react-icons/fa";
import style from "./header.module.scss"

interface Params {
  toggleMenu: {
    isMenuOpen: Boolean
    setMenuOpen: Function
  }
}

export default function RightNav({toggleMenu}: Params) {
  const {isMenuOpen, setMenuOpen} = toggleMenu

  return (
    <>
      <div className={style.rightNav}>
        <FaBars 
          className={`${style.icon} ${!isMenuOpen ? style.visible : style.hidden}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <FaRegWindowClose 
          className={`${style.icon} ${isMenuOpen ? style.visible : style.hidden}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
         />
      </div>
    </>
  );
}