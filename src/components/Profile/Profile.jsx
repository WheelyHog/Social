import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { setStatusAction, setUserProfileAction } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profileAPI } from "../../api/profile_api";

export default function Profile() {

  const dispatch = useDispatch()
  let { id } = useParams()
  if (!id) {
    id = 28309
  }

  const profile = useSelector(store => store.profilePage.profile)
  const userStatus = useSelector(store => store.profilePage.status);

  useEffect(() => {
    profileAPI.getProfile(id)
      .then(res => dispatch(setUserProfileAction(res.data)))

    profileAPI.getStatus(id)
      .then(res => dispatch(setStatusAction(res.data)))

  }, [dispatch, id])

  const isAuth = useSelector(store => store.auth.data.isAuth)

  if (!isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      {profile && <ProfileInfo profile={profile} userStatus={userStatus} />}
      <MyPostsContainer />
    </div>
  )
}
