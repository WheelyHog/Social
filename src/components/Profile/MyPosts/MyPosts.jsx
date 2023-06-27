import React from 'react'
import { useDispatch } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css'
import Post from './Post/Post'


export default function MyPosts({ posts }) {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(addPostActionCreator(values))
  }

  return (
    <div className={s.postsBlock}>
      <h4>My Posts</h4>
      <AddPostForm onSubmit={handleSubmit} />
      <div className={s.posts}>
        {posts.map(elem => <Post message={elem.message} likesCount={elem.likeCount} key={elem.id} />)}
      </div>
    </div>
  )
}
