// Icons
import { FaBars, FaRegWindowClose } from "react-icons/fa";

// Styling
import style from "./header.module.scss"
import { cls } from "../../utils/classNames.js";

export default function RightNav({toggleMenu}) {
  const {isMenuOpen, setMenuOpen} = toggleMenu

  return (
    <>
      <div className={style.rightNav}>
        <FaBars 
          className={cls(style.icon, !isMenuOpen ? style.visible : style.hidden)}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <FaRegWindowClose 
          className={cls(style.icon, isMenuOpen ? style.visible : style.hidden)}
          onClick={() => setMenuOpen(!isMenuOpen)}
         />
      </div>
    </>
  );
}