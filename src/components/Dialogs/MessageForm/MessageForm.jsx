import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MessageForm.module.css'

const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>message</label>
        <div>
          <Field placeholder='Enter your message' name='message' component={'textarea'} className={s.message_body} />
        </div>
      </div>

      <div>
        <button className={s.send_btn}>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'add_message',
})(AddMessageForm)
