import React from "react"
import n from './News.module.css'

const New = (props) => {
    return(
        <div className={n.content__new}>
            <div className={n.content__new__img}></div>
            <p className={n.content__new__dscr}>{props.text}</p>
            <span className={n.content__new__likes}>{props.likes} лайков</span>
        </div>
    );
}

export default New;
