const defaultState = {
  posts: [
    { id: 1, message: "How are you?!", likeCount: 10 },
    { id: 2, message: "This is my first post.", likeCount: 11 },
    { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
    { id: 4, message: "Meow!!!", likeCount: 5 }
  ],
  newPostText: 'text'
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state = defaultState, action) => {

  switch (action.type) {

    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        message: state.newPostText,
        likeCount: 0
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }

    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}