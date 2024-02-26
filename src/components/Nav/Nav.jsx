import React from "react";
import n from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav className={n.nav}>
            <h3 className={n.nav__head}>Navigation</h3>
            <ul className={n.nav__list}>
                <li className={n.nav__item}>
                    <NavLink to="/profile" className={({isActive}) => isActive ? `${n.active}`: n.nav__link}>Профиль</NavLink>
                </li>
                <li className={n.nav__item}>
                    <NavLink to="/messeges" className={({isActive}) => isActive ? `${n.active}`: n.nav__link}>Сообщения</NavLink>
                </li>
                <li className={n.nav__item}>
                    <NavLink to="/friends" className={({isActive}) => isActive ? `${n.active}`: n.nav__link}>Друзья</NavLink>
                </li>
                <li className={n.nav__item}>
                    <NavLink to="/users" className={({isActive}) => isActive ? `${n.active}`: n.nav__link}>Пользователи</NavLink>
                </li>
            </ul>
            <h3 className={n.nav__head}>Последние друзья</h3>
            {/* <ul className={n.nav__friends}>
                <li className={n.nav__friendsItem}>
                    <img src={props.friendsPage.FriendsData[0].useravatar} alt="" className={`profile__avatar ${n.nav__avatar}`} />
                </li>
                <li className={n.nav__friendsItem}>
                    <img src={props.friendsPage.FriendsData[1].useravatar} alt="" className={`profile__avatar ${n.nav__avatar}`} />
                </li>
                <li className={n.nav__friendsItem}>
                    <img src={props.friendsPage.FriendsData[2].useravatar} alt="" className={`profile__avatar ${n.nav__avatar}`} />
                </li>
            </ul> */}
        </nav>
    );
}

export default Nav;
