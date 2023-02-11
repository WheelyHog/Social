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
      ]
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }

}

export default store;
window.store = store;