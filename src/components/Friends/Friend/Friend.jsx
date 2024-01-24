import React from "react";
import f from '../Friends.module.css';
import p from '../../Profile/Profile.module.css';
import { NavLink } from "react-router-dom";

const Friend = (props) => {
    return(
        <li>
            <NavLink to={`/friends/${props.id}`} className={f.friends__item}>
                <img src={props.useravatar} alt="UserAvatar" className={`${p.profile__avatar} ${f.friends__avatar}`} />
                <div className={f.friends__info}>
                    <h3 className={f.friends__head}>
                            {props.username}
                    </h3>
                    <p className={f.friends__dscr}>{props.userabout}</p>
                </div>
            </NavLink>
        </li>
    );
}

export default Friend;