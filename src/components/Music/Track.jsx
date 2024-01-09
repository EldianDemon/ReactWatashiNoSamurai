import React from "react";
import m from "./Music.module.css"

const Track = (props) => {
    return(
        <div className={m.music__item}> 
            <h4>{props.name}</h4>
            <p>{props.dscr}</p>
        </div>
    );
}

export default Track;