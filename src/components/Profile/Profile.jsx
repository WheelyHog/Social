import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { setStatusAction, setUserProfileAction } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profileAPI } from "../../api/profile_api";

export default function Profile() {

  let { id } = useParams()

  const dispatch = useDispatch()
  // const myId = useSelector(store => store.auth.data.id)
  const profile = useSelector(store => store.profilePage.profile)
  const userStatus = useSelector(store => store.profilePage.status);
  const isAuth = useSelector(store => store.auth.data.isAuth)

  useEffect(() => {
    profileAPI.getProfile(id)
      .then(res => dispatch(setUserProfileAction(res.data)))

    profileAPI.getStatus(id)
      .then(res => dispatch(setStatusAction(res.data)))

  }, [])


  if (!id) {
    id = 28309;
    // if (!myId) {
    //   return <Navigate to={'/login'} />
    // }
  }

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
