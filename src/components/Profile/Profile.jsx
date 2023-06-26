import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { setUserProfileAction } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { usersAPI } from "../../api/api";

export default function Profile() {

  const dispatch = useDispatch()
  let { id } = useParams()
  if (!id) {
    id = 2
  }

  const profile = useSelector(store => store.profilePage.profile)

  useEffect(() => {
    usersAPI.getProfile(id)
      .then(res => dispatch(setUserProfileAction(res.data)))
  }, [dispatch, id])

  const isAuth = useSelector(store => store.auth.data.isAuth)

  if (!isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      {profile && <ProfileInfo profile={profile} />}
      <MyPostsContainer />
    </div>
  )
}
