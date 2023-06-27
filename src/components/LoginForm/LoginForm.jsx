import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Login</label>
        <div>
          <Field placeholder='Login' name='login' component={'input'} />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field placeholder='Password' name='password' component={'input'} />
        </div>
      </div>
      <div>
        <label>Remember Me</label>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
        </div>
      </div>

      <div>
        <button type='submit'>Login</button>
      </div>
    </form>

  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)

