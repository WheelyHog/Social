import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';
import s from './AddPostForm.module.css'

const maxLengthCreator30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field className={s.posts__textarea} component={Textarea} name='post' validate={[required, maxLengthCreator30]} placeholder={'Post text'} />
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