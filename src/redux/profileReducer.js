const defaultState = {
  posts: [
    { id: 1, message: "How are you?!", likeCount: 10 },
    { id: 2, message: "This is my first post.", likeCount: 11 },
    { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
    { id: 4, message: "Meow!!!", likeCount: 5 }
  ],
  profile: null,
  status: ''
}

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'

export const profileReducer = (state = defaultState, action) => {

  switch (action.type) {

    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        message: action.payload.post,
        likeCount: 0
      }
      return { ...state, posts: [...state.posts, newPost] }
    }

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload }

    case SET_STATUS:
      return { ...state, status: action.payload }

    case SAVE_PHOTO:
      return { ...state, profile: { ...state.profile, photos: { large: action.payload } } }

    default:
      return state;
  }
}

export const addPostActionCreator = (payload) => ({ type: ADD_POST, payload })

export const setUserProfileAction = (payload) => ({ type: SET_USER_PROFILE, payload })
export const setStatusAction = (payload) => ({ type: SET_STATUS, payload })
export const savePhotoAction = (payload) => ({ type: SAVE_PHOTO, payload })