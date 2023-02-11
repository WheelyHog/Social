import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <div className={s.postsBlock}>
        <h4>My Posts</h4>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={s.posts__textarea} value={props.newPostText} />
            <div>
                <button onClick={addPost} className={s.add__post}>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;