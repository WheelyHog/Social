const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you?!", likeCount: 10 },
        { id: 2, message: "This is my first post.", likeCount: 11 },
        { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
        { id: 4, message: "Meow!!!", likeCount: 5 }
      ],
      newPostText: 'text'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state)
    }
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;