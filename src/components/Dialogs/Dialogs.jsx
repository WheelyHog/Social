import React from 'react'
import { useDispatch } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import AddMessageForm from './MessageForm/MessageForm';

export default function Dialogs({ store }) {
  const dispatch = useDispatch()

  // let messageBody = store.newMessageBody;

  // let onSendMessageClick = () => {
  //   sendMessage();
  // }

  // const onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   updateNewMessageBody(body)
  // }

  const handleSubmit = (values) => {
    dispatch(sendMessageCreator(values))
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

        <AddMessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
