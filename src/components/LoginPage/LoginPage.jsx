import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import s from './LoginPage.module.css'

export default function LoginPage() {

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.page_title}>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
