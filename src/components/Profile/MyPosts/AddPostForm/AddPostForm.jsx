import React from 'react'
import { Field, reduxForm } from 'redux-form';
import s from './AddPostForm.module.css'

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field className={s.posts__textarea} component={'textarea'} name='post' />
      </div>
      <div>
        <button className={s.add__post} >Add Post</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'post'
})(AddPostForm)