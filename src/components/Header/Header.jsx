import React from "react";
import s from './../Header/Header.module.css';
import hog from './assets/hog_g.png';

const Header = () => {
  return <header className={s.header}>
    <img className={s.header__img} src={hog} alt="img"></img>
  </header>
}

export default Header;