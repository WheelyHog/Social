import React, { useRef } from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post'


export default function MyPosts({ posts, newPostText, dispatch }) {
  console.log(newPostText);

  const addNewPost = () => {
    dispatch(addPostActionCreator())
  }

  const newPostElement = useRef()

  const onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h4>My Posts</h4>
      <div>
        <textarea className={s.posts__textarea} ref={newPostElement} onChange={onPostChange} value={newPostText} />
        <div>
          <button className={s.add__post} onClick={addNewPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map(elem => <Post message={elem.message} likesCount={elem.likeCount} key={elem.id} />)}
      </div>
    </div>
  )
}
