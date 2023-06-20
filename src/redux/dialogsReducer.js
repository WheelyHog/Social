const defaultState = {
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

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body }

    }
    case SEND_MESSAGE: {
      const body = state.newMessageBody;
      return { ...state, messages: [...state.messages, { id: Date.now(), message: body }], newMessageBody: '' }

    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}