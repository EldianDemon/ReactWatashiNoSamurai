import React from 'react';
import u from './Users.module.css'

const Users = (props) => {

    let UsersOut = props.users.map(el => 
        <div className={u.user__container}>
            <div className={u.users__item__left}>
                <img src="" alt="useravatar" className={u.users__img} />
                {el.followed ? <button onClick={() => { props.unfollow(el.id) }} >Unfollow</button> : <button onClick={() => { props.follow(el.id) }}>Follow</button>}
            </div>
            <div className={u.users__item__right}>
                <div className={u.users__item__right__l}>
                    <h3 className={u.users__username}>{el.username}</h3>
                    <p className={u.users__about}>{el.userabout}</p>
                </div>
                <div className={u.users__item__right__r}>
                    <h3 className={u.users__location}>
                        {el.country}
                        <br />
                        {el.city}
                    </h3>
                </div>
            </div>
        </div>
    )

    return (
        <div className='container'>
            <ul className={u.users__list}>
                {UsersOut}
            </ul>
        </div>
    )
}

export default Users;