import React from "react";
import Post from "./Post/Post";
import p from "./Posts.module.css";

const Posts = (props) => {
  
    let PostsOut = props.PostsData.map(
        el => <Post key={el.id} img={el.img} text={el.text} />   
    )

    return(
        <ul className={p.posts__list}>
            {PostsOut}
        </ul>
    );
}

export default Posts;