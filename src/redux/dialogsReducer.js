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

const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: {
      return { ...state, messages: [...state.messages, { id: Date.now(), message: action.payload.message }] }
    }
    default:
      return state;
  }
}

export const sendMessageCreator = (payload) => ({ type: SEND_MESSAGE, payload })
