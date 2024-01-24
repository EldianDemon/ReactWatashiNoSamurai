import React from "react";
import m from '../Messeges.module.css'
import { NavLink } from "react-router-dom";

const Messege = (props) => {
    return(
        <li className={m.messeges__item}>
            <img src={props.useravatar} alt="UserAvatar" className={m.messeges__img} />
            <NavLink to={`/messeges/${props.id}`} className={m.messeges__link}>
                {props.username}
            </NavLink>
            <p>{props.lastmessege}</p>
        </li>
    );
}

export default Messege;