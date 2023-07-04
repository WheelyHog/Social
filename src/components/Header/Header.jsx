import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { authAPI } from "../../api/api";
import { setUserDataAction } from "../../redux/authReducer";
import s from './../Header/Header.module.css';
import hog from './assets/hog_g.png';

const Header = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   authAPI.me()
  //     .then(res => {
  //       if (res.data.resultCode === 0) {
  //         dispatch(setUserDataAction(res.data))
  //       }
  //     })
  // }, [dispatch])

  const auth = useSelector(store => store.auth)

  const logout = () => {
    authAPI.logout()
      .then(res => {
        console.log(res.data)
        if (res.data.resultCode === 0) {
          dispatch(setUserDataAction(null, null, null, false))
        }
      })
  }

  if (!auth) {
    return <Navigate to={'/login'} />
  }

  return <header className={s.header}>
    <img className={s.header__img} src={hog} alt="img"></img>
    <div className={s.login_block}>
      {auth?.data.isAuth ?
        <div>
          <p className={s.username}>{auth.data.login}</p>
          <button onClick={logout}>Logout</button>
        </div>
        : <NavLink to={'/login'} className={s.login_link}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;