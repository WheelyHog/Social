import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store;