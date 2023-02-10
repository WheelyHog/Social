import { rerenderEntireTree } from "../../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How are you?!", likeCount: 10 },
      { id: 2, message: "This is my first post.", likeCount: 11 },
      { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
      { id: 4, message: "Meow!!!", likeCount: 5 }
    ]
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

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state);
};

export default state;