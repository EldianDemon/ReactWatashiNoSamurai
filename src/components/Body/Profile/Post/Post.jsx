import React from "react";
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.posts__item}>
            <p className={p.posts__dscr}>{props.text}</p>
        </div>
    );
}

export default Post;