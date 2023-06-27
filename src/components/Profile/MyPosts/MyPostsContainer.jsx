import React from 'react'
import { useSelector } from 'react-redux';


import MyPosts from './MyPosts';


export default function MyPostsContainer() {

  const posts = useSelector(store => store.profilePage.posts)

  return (
    <MyPosts posts={posts} />
  )
}
