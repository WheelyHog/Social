import React from "react";
import s from './Post.module.css'
import oggy from './assets/oggy.png'
import { SlLike } from 'react-icons/sl'

const Post = ({ message, likesCount }) => {
    return (
        <div className={s.item}>
            <img className={s.user__avatar} src={oggy} alt="img"></img>
            {message}
            <div className={s.like_box}>
                <SlLike />
                <p>Likes: {likesCount}</p>
            </div>

        </div>
    )
}

export default Post;