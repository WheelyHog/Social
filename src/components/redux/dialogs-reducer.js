const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: "Masha" },
    { id: 2, name: "Dasha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Kakasha" }
  ],
  messages: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Who are you?" },
    { id: 3, message: "Give me your motorcycle!" },
    { id: 4, message: "Meow!!!" }
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = { ...state }

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.body;
      return stateCopy
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy
    default: return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;