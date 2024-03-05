import React from 'react';
import u from './Users.module.css'
import axios from 'axios';

const Users = (props) => {

    let GetUsers = () => {
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setusers(response.data.items)
            })
        }
    }

    let UsersOut = props.users.map(el => 
        <div className={u.user__container}>
            <div className={u.users__item__left}>
                <img width={80} src={el.photos.small != null ? el.photos.small : 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg'} />
                {el.followed ? <button onClick={() => {props.unfollow(el.id)}}>unfollow</button> : <button onClick={() => {props.follow(el.id)}}>follow</button>}
            </div>
            <div className={u.users__item__right}>
                <div className={u.users__item__right__l}>
                    <h3 className={u.users__username}>{el.name}</h3>
                    <p className={u.users__about}>userabout</p>
                </div>
                <div className={u.users__item__right__r}>
                    <h3 className={u.users__location}>
                        country
                        <br />
                        city
                    </h3>
                </div>
            </div>
        </div>
    )

    return (
        <div className='container'>
            <button onClick={GetUsers}>Get Users</button>
            <ul className={u.users__list}>
                {UsersOut}
            </ul>
        </div>
    )
}

export default Users;