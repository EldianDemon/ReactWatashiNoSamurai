import React from "react";
import m from "./Music.module.css"
import Track from "./Track"

const Music = () => {
    return(
        <div>
            <h2 className={m.music__head}>Your Music</h2>
            <ul>
                <li>
                    <Track name='Gachi' dscr='Gay shit'/>
                </li>
                <li>
                    <Track name='Билборды' dscr='Для дединсайдов и эмо гулей' />
                </li>
            </ul>
        </div>
    );
}

export default Music;