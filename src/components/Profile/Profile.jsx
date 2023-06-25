import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfileAction } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { base_url } from "../../api/api";

export default function Profile() {

  const dispatch = useDispatch()
  let { id } = useParams()
  if (!id) {
    id = 2
  }
  console.log(id);

  const profile = useSelector(store => store.profilePage.profile)
  console.log(profile);

  useEffect(() => {
    axios.get(`${base_url}/profile/${id}`)
      .then(res => dispatch(setUserProfileAction(res.data)))
  }, [dispatch, id])

  return (
    <div>
      {profile && <ProfileInfo profile={profile} />}
      <MyPostsContainer />
    </div>
  )
}
