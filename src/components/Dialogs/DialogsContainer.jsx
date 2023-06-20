import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

export default function DialogsContainer() {

  const store = useSelector(store => store.dialogsPage)

  const dispatch = useDispatch()

  let onSendMessageClick = () => {
    dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (body) => {
    dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} store={store} />
  )
}

// const f1 = () => {
//   return {
//     dialogsPage: {}
//   }
// }
// const f2 = () => {
//   return {

//   }
// }

// const SuperDialogsContainer = connect(f1, f2)(Dialogs)