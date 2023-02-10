import React from "react";
import s from './../Header/Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img className={s.header__img} src='./../hog_g.png' alt="img"></img>
      </header>
}

export default Header;