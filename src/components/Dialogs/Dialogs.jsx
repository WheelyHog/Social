import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

export default function Dialogs({ updateNewMessageBody, sendMessage, store }) {

  let messageBody = store.newMessageBody;

  let onSendMessageClick = () => {
    sendMessage();
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {store.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />)}
      </div>
      <div className={s.messages}>
        <div>
          {store.messages.map(elem => <Message id={elem.id} message={elem.message} key={elem.id} />)}
        </div>
        <div>
          <div><textarea placeholder='Enter your message' value={messageBody} onChange={onNewMessageChange} className={s.message_body} /></div>
          <div><button onClick={onSendMessageClick} className={s.send_btn}>Send</button></div>
        </div>
      </div>
    </div>
  )
}
