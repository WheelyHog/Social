import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { base_url } from "../../api/api";
import { setUserDataAction } from "../../redux/authReducer";
import s from './../Header/Header.module.css';
import hog from './assets/hog_g.png';

const Header = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${base_url}/auth/me`, {
      withCredentials: true
    })
      .then(res => {
        if (res.data.resultCode === 0) {
          // const { id, login, email } = res.data.data;
          dispatch(setUserDataAction(res.data))
        }
      })
  }, [])

  const auth = useSelector(store => store.auth)

  return <header className={s.header}>
    <img className={s.header__img} src={hog} alt="img"></img>
    <div className={s.login_block}>
      {auth?.isAuth ? <p className={s.username}>{auth.data.login}</p>
        : <NavLink to={'/login'} className={s.login_link}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;