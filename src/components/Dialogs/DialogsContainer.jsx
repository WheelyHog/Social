import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Dialogs from './Dialogs';

export default function DialogsContainer() {

  const store = useSelector(store => store.dialogsPage)
  const isAuth = useSelector(store => store.auth.data.isAuth)

  if (!isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <Dialogs store={store} />
  )
}
