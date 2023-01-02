import Search from './Search.jsx';
import RightNav from './RightNav.jsx';
import SideMenu from './SideMenu.jsx';
import { useState } from 'react';

//Icons
import { GiPartyPopper } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight, FaMeetup } from "react-icons/fa";

// Styling
import style from "./header.module.scss"

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className={style.container} >
      <div className={style.content}>
        <a href="/" className={style.logo}>Localize</a>
        <Search />
        <RightNav toggleMenu={{isMenuOpen, setMenuOpen}}/>
      </div>
      <SideMenu isMenuOpen={isMenuOpen}/>
      <div className={style.panelMenu}>
        <FaChevronLeft className={style.icon} />
        <nav>
          <FaMeetup className={style.icon} style={{color: "red"}} />
          <FcGoogle className={style.icon} />
          <GiPartyPopper className={style.icon} style={{color: "purple"}} />
        </nav>
        <FaChevronRight className={style.icon} />
      </div>
    </header>
  );
}