import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img className={s.user__avatar} src="./../oggy.png" alt="img"></img>
        {props.message}
        <span><i className="las la-thumbs-up"></i>{props.likeCount}</span>
    </div>
}

export default Post;