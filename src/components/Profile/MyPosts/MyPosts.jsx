import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h4>My Posts</h4>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={s.posts__textarea} value={props.newPostText} key={'id'} />
            <div>
                <button onClick={onAddPost} className={s.add__post}>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;