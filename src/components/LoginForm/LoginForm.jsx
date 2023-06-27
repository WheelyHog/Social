import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './LoginForm.module.css'


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div className={s.form_section}>
        <label>Login</label>
        <div>
          <Field placeholder='Login' name='login' component={'input'} className={s.input} />
        </div>
      </div>
      <div className={s.form_section}>
        <label>Password</label>
        <div>
          <Field placeholder='Password' name='password' component={'input'} className={s.input} />
        </div>
      </div>
      <div className={s.form_section}>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} className={s.checkbox} />
        <label>Remember Me</label>
      </div>

      <div className={s.form_section}>
        <button className={s.submit_btn}>Login</button>
      </div>
    </form>

  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)

