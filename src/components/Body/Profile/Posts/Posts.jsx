import React from "react";
import Post from "./Post/Post";
import p from "./Posts.module.css";

const Posts = (props) => {

    let PostsOut = props.PostsData.map(
        el => <Post img={el.img} dscr={el.dscr} />   
    )

    return(
        <ul className={p.posts__list}>
            {PostsOut}
        </ul>
    );
}

export default Posts;