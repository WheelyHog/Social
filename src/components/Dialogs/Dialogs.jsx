import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message message={message.message} />)
    let newMessageBody = state.newMessageBody;

    let onSensMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message" /></div>
                    <div><button onClick={onSensMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;