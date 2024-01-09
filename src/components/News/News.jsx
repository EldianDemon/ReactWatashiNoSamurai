import React from "react";
import New from "./New"
import news from "./News.module.css"

const News = () => {
    return(
        <div>
            <ul className={news.news__list}>
                <New news__head='Новость 1' news__dscr='Lorem' />
                <New news__head='Новость 2' news__dscr='Lorem' />
                <New news__head='Новость 3' news__dscr='Lorem' />
            </ul>
        </div>
    );
}

export default News;