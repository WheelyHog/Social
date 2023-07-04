const defaultState = {
  initialized: false
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true }

    default:
      return state
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

