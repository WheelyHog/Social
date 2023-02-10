import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return <div className={s.postsBlock}>
        <h4>My Posts</h4>
        <div>
            <textarea ref={newPostElement} className={s.posts__textarea}></textarea>
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