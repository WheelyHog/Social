import React from 'react'
import store, { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

export default function Dialogs({ store }) {

  let state = store.getState().dialogsPage;

  let messageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)}
      </div>
      <div className={s.messages}>
        <div>
          {state.messages.map(elem => <Message id={elem.id} message={elem.message} key={elem.id} />)}
        </div>
        <div>
          <div><textarea placeholder='Enter your message' value={messageBody} onChange={onNewMessageChange} /></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}
