import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer'
import s from './Users.module.css'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(store => store.usersPage.users)
  if (users.length === 0) {
    dispatch(setUsersActionCreator())
  }

  return (
    <div>
      {users.map(elem => <div key={elem.id}>
        <span>
          <div>
            <img src={elem.photoUrl} className={s.user_photo} />
          </div>
        </span>
        <span>
          {elem.followed
            ? <button onClick={() => dispatch(unfollowActionCreator(elem.id))}>Unfollow</button>
            : <button onClick={() => dispatch(followActionCreator(elem.id))}>Follow</button>}
        </span>
        <span>
          <div>{elem.fullname}</div>
          <div>{elem.status}</div>
        </span>
        <span>
          <div>{elem.location.city}</div>
          <div>{elem.location.country}</div>
        </span>
      </div>)}
    </div>
  )
}
