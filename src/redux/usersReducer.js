const defaultState = {
  users: [
    { id: 1, fullname: 'Masha', status: 'I am a boss!', location: { city: 'Dzierzoniow', country: 'Poland' }, followed: false, photoUrl: 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png' },
    { id: 2, fullname: 'Dasha', status: 'I am a fishwoman!', location: { city: 'Swidnica', country: 'Hungary' }, followed: true, photoUrl: 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png' },
    { id: 3, fullname: 'Sasha', status: 'I am a teacher!', location: { city: 'Wroclaw', country: 'Poland' }, followed: true, photoUrl: 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png' },
    { id: 4, fullname: 'Kakasha', status: 'I am a biker!', location: { city: 'New-York', country: 'USA' }, followed: false, photoUrl: 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png' },

  ]
};

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: true }
          }
          return user
        })
      }

    case UNFOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.payload] }

    default:
      return state
  }

}

export const followActionCreator = (payload) => ({ type: FOLLOW, payload })
export const unfollowActionCreator = (payload) => ({ type: UNFOLLOW, payload })
export const setUsersActionCreator = (payload) => ({ type: SET_USERS, payload })