import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

import MyPosts from './MyPosts';


export default function MyPostsContainer() {

  const posts = useSelector(store => store.profilePage.posts)
  const newPostText = useSelector(store => store.profilePage.newPostText)

  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} updateNewPosts={onPostChange} posts={posts} newPostText={newPostText} />
  )
}
