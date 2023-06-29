import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authAPI } from '../../api/api'

import { setUserDataAction } from '../../redux/authReducer'
import LoginForm from '../LoginForm/LoginForm'
import s from './LoginPage.module.css'

export default function LoginPage() {

  const dispatch = useDispatch()
  const isAuth = useSelector(store => store.auth.data.isAuth)
  console.log(isAuth)

  const onSubmit = (values) => {
    const { login, password, rememberMe } = values;
    authAPI.login(login, password, rememberMe)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserDataAction(res.data))
        }
      })
    authAPI.me()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserDataAction(res.data))
        }
      })
  }

  if (isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.page_title}>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
