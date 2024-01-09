import React from "react"
import n from './News.module.css'
import New from './New'

const News = () => {
    return(
        <div className={n.content__news}>
            <New text='You look lonely' likes='10'/>
            <New text='You look like a good Joe' likes='12'/>
            <New text='I can fix that' likes='30'/>
        </div>
    );
}

export default News;
