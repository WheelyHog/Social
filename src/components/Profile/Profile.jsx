import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile({ posts, newPostText, dispatch }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </div>
  )
}
