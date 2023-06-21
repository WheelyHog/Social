import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer'
import s from './Users.module.css'

export default function Users() {

  const dispatch = useDispatch()
  const fake_photo = 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png'
  const base_url = 'https://social-network.samuraijs.com/api/1.0'
  const users = useSelector(store => store.usersPage.users)
  const pageSize = useSelector(store => store.usersPage.pageSize);
  const totalUsersCount = useSelector(store => store.usersPage.totalUsers);
  const currentPage = useSelector(store => store.usersPage.currentPage);

  useEffect(() => {
    if (users.length === 0) {
      axios.get(`${base_url}/users?page=${currentPage}&count=${pageSize}`)
        .then(res => {
          dispatch(setUsersActionCreator(res.data))
        })
    }
  }, [dispatch, users.length])

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPageActionCreator(pageNumber))
    axios.get(`${base_url}/users?page=${pageNumber}&count=${pageSize}`)
      .then(res => dispatch(setUsersActionCreator(res.data)))
  }

  return (
    <div>
      <div>
        {pages.map(elem => <span key={elem} className={currentPage === elem && s.selected_page} onClick={() => onPageChanged(elem)}>{elem}</span>)}

      </div>
      {users.map(elem =>
        <div key={elem.id}>
          <span>
            <div>
              <img src={elem.photos.small !== null ? elem.photos.small : fake_photo} className={s.user_photo} alt='user_photo' />
            </div>
          </span>
          <span>
            {elem.followed
              ? <button onClick={() => dispatch(unfollowActionCreator(elem.id))}>Unfollow</button>
              : <button onClick={() => dispatch(followActionCreator(elem.id))}>Follow</button>}
          </span>
          <span>
            <div>{elem.name}</div>
            <div>{elem.status}</div>
          </span>
          <span>
            <div>{'location.city'}</div>
            <div>{'location.country'}</div>
          </span>
        </div>)}
    </div>
  )
}
