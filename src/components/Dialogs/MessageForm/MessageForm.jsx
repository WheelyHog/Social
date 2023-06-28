import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';
import s from './MessageForm.module.css'

const maxLengthCreator100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>message</label>
        <div>
          <Field placeholder='Enter your message' name='message' component={Textarea} className={s.message_body} validate={[required, maxLengthCreator100]} />
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
