import React from "react";
import u from '../Users.module.css'

const User = (props) => {
    return (
        <div className={u.user__container}>
            <div className={u.users__item__left}>
                <img src="" alt="useravatar" className={u.users__img} />
                <button className={u.users__follow}>Follow</button>
            </div>
            <div className={u.users__item__right}>
                <div className={u.users__item__right__l}>
                    <h3 className={u.users__username}>{props.username}</h3>
                    <p className={u.users__about}>userabout</p>
                </div>
                <div className={u.users__item__right__r}>
                    <h3 className={u.users__location}>
                        usercountry
                        <br />
                        usercity
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default User