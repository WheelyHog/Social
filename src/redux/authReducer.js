const defaultState = {
  messages: [],
  data: {
    id: null,
    email: null,
    login: null,
    isAuth: false
  }
}

const SET_USER_DATA = 'SET_USER_DATA'

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log(action.payload)
      return { ...state, messages: [action.payload.messages], data: { ...action.payload.data, isAuth: true } }
    default:
      return state
  }
}

export const setUserDataAction = (payload) => ({ type: SET_USER_DATA, payload })
