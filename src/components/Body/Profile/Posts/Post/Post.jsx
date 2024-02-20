import React from "react";
import p from '../Posts.module.css'

const Post = (props) => {
    return (
        <li className={p.posts__item}>
            <img src={props.img} alt="UserAvatar" className={p.posts__avatar} />
            <p className={p.posts__dscr}>{props.text}</p>
        </li>
    );
}

export default Post;