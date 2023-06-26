import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, toggleFollowingProgress, unfollowActionCreator } from '../../redux/usersReducer'
import s from './Users.module.css'


export default function Users() {

  const dispatch = useDispatch()
  const fake_photo = 'https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png'
  const users = useSelector(store => store.usersPage.users)
  const pageSize = useSelector(store => store.usersPage.pageSize);
  const totalUsersCount = useSelector(store => store.usersPage.totalUsers);
  const currentPage = useSelector(store => store.usersPage.currentPage);
  const followingInProgress = useSelector(store => store.usersPage.followingInProgress)


  useEffect(() => {
    if (users.length === 0) {
      usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
          dispatch(setUsersActionCreator(data))
        })
    }
  }, [dispatch, users.length, currentPage, pageSize])

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPageActionCreator(pageNumber))
    usersAPI.getUsers(pageNumber, pageSize)
      .then(data => dispatch(setUsersActionCreator(data)))
  }

  const followUser = (id) => {
    dispatch(toggleFollowingProgress(true))
    usersAPI.followUser(id)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followActionCreator(id))
        }
      })
      .then(dispatch(toggleFollowingProgress(false)))
  }

  const unFollowUser = (id) => {
    dispatch(toggleFollowingProgress(true))
    usersAPI.unFollowUser(id)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowActionCreator(id))
        }
      })
      .then(dispatch(toggleFollowingProgress(false)))
  }

  const isAuth = useSelector(store => store.auth.data.isAuth)

  if (!isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className={s.users_container}>
      <div>
        {pages.map(elem => <span key={elem} className={currentPage === elem ? s.selected_page : ''} onClick={() => onPageChanged(elem)}>{elem}</span>)}

      </div>
      {users.map(elem =>
        <div key={elem.id}>
          <span>
            <div>
              <NavLink to={`/profile/${elem.id}`}><img src={elem.photos.small !== null ? elem.photos.small : fake_photo} className={s.user_photo} alt='user_photo' /></NavLink>
            </div>
          </span>
          <span>
            {elem.followed
              ? <button
                onClick={() => unFollowUser(elem.id)}
                disabled={followingInProgress}
              >Unfollow</button>
              : <button
                onClick={() => followUser(elem.id)}
                disabled={followingInProgress}
              >Follow</button>}
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
