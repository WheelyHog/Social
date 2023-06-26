// import { dialogsReducer } from "./dialogsReducer";
// import { profileReducer } from "./profileReducer";
// import { sidebarReducer } from "./sidebarReducer";

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
    usersPage: {
      users: [
        { id: 1, fullname: 'Masha', status: 'I am a boss!', location: { city: 'Dzierzoniow', country: 'Poland' }, followed: false },
        { id: 2, fullname: 'Dasha', status: 'I am a fishwoman!', location: { city: 'Swidnica', country: 'Hungary' }, followed: true },
        { id: 3, fullname: 'Sasha', status: 'I am a teacher!', location: { city: 'Wroclaw', country: 'Poland' }, followed: true },
        { id: 4, fullname: 'Kakasha', status: 'I am a biker!', location: { city: 'New-York', country: 'USA' }, followed: false },

      ]
    },
    sidebar: {}
  },
}

export default store;




