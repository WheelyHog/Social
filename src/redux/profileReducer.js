const defaultState = {
  posts: [
    { id: 1, message: "How are you?!", likeCount: 10 },
    { id: 2, message: "This is my first post.", likeCount: 11 },
    { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
    { id: 4, message: "Meow!!!", likeCount: 5 }
  ],
  newPostText: 'text',
  profile: null,
  status: ''
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload }

    case SET_STATUS:
      return { ...state, status: action.payload }

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

export const setUserProfileAction = (payload) => ({ type: SET_USER_PROFILE, payload })
export const setStatusAction = (payload) => ({ type: SET_STATUS, payload })