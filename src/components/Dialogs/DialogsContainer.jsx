import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

export default function DialogsContainer() {

  const store = useSelector(store => store.dialogsPage)
  const isAuth = useSelector(store => store.auth.data.isAuth)
  console.log(isAuth)

  const dispatch = useDispatch()

  let onSendMessageClick = () => {
    dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (body) => {
    dispatch(updateNewMessageBodyCreator(body))
  }

  if (!isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} store={store} />
  )
}
