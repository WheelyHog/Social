import React from "react";
import StoreContext from "../../StoreContext";
// import s from './Dialogs.module.css';
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
        // let state = store.getState().dialogsPage;

        let onSensMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSensMessageClick} dialogsPage={store.getState().dialogsPage} />
      }
    }

  </StoreContext.Consumer>


}

export default DialogsContainer;