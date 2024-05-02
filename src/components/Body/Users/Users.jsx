import React from "react"
import u from './Users.module.css'
import avatar from '../../../img/avatars/avatar.jpg'
import { NavLink } from "react-router-dom"

const Users = (props) => {
    let UsersOut = props.users.map(
        el =>
            <div className={u.user__container}>
                <div className={u.users__item__left}>
                    <NavLink to={`/profile/${el.id}`}>
                        <img src={el.photos.small ? el.photos.small : avatar} alt='useravatar' className={u.users__avatar} />
                    </NavLink>
                    {el.followed ? <button onClick={() => { props.unfollow(el.id) }} className={u.users__btn}>unfollow</button> : <button onClick={() => { props.follow(el.id) }} className={u.users__btn}>follow</button>}
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

    let PagesCount = Math.ceil(props.usersCount / props.pageSize)

    let Pages = []

    for (let i = 1; i <= PagesCount; i++) {
        Pages.push(i)
    }

    let curP = props.selectedPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = Pages.slice(curPF, curPL);

    return (
        <div className='container'>
            <ul className={u.users__pages__list}>
                {slicedPages.map(el => <li className={el === props.selectedPage ? `${u.users__pages__item} ${u.users__pages__item_active}` : u.users__pages__item} onClick={() => props.changePage(el)}>{el}</li>)}
            </ul>
            <ul className={u.users__list}>
                {UsersOut}
            </ul>
        </div>
    )
}


export default Users;