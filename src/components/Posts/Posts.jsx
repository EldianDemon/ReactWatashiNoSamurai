import React from "react";
import Post from "./Post/Post";
import p from "./Posts.module.css";
import StoreContext from "../../StoreContext";

const Posts = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let PostsOut = store.getState().profilePage.PostsData.map(
                        el => <Post img={el.img} dscr={el.dscr} />
                    )

                    return (
                        <ul className={p.posts__list}>
                            {PostsOut}
                        </ul>
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default Posts;