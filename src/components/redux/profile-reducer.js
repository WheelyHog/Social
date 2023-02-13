const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "How are you?!", likeCount: 10 },
    { id: 2, message: "This is my first post.", likeCount: 11 },
    { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
    { id: 4, message: "Meow!!!", likeCount: 5 }
  ],
  newPostText: 'text'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      let stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.newText;
      return stateCopy
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;