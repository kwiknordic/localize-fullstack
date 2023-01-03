import Search from './Search.jsx';
import RightNav from './RightNav.jsx';
import SideMenu from './SideMenu.jsx';
import style from "./header.module.scss"
import { useState } from 'react';

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
    </header>
  );
}