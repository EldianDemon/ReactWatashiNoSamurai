import React from "react";
import news from "./News.module.css"

const New = (props) => {
    return(
        <li className={news.news__item}>
            <h3>{props.news__head}</h3>
            <p>{props.news__dscr}</p>
        </li>
    );
}

export default New;