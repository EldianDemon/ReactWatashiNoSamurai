import React from "react";
import p from './Profile.module.css';
import Posts from '../Posts/Posts';
import Createpost from "../Posts/Post/Createpost";

const Profile = (props) => {
    return (
        <section className={p.profile}>
            <div className={p.profile__wallpaper}>
                <button className={`${p.btn} ${p.wallpaper_btn}`}>
                    <a href="" className={p.profile__wallpaper__edit__link}>Изменить фон</a>
                </button>
            </div>
            <div className={`container ${p.profile__container}`}>
                <img src={props.friendsPage.FriendsData[7].useravatar} alt="useravatar" className={p.profile__avatar} />
                <div className={p.profile__body}>
                    <h3 className={p.profile__name}>{props.friendsPage.FriendsData[7].username}</h3>
                    <p className={p.profile__dscr}>
                        {props.friendsPage.FriendsData[7].userabout}
                    </p>
                    <div className={p.profile__btm}>
                        <div className={p.profile__location}>
                            <i></i>UserLocation</div><div className={p.profile__job}><i></i>UserJob</div>
                        <div className={p.profile__info}><i></i>UserInfo</div>
                    </div>
                </div>
                <div className={p.profile_right}>
                    <button className={`${p.btn} ${p.profile__edit__btn}`}>
                        <a className={p.profile__edit__link}>Редактировать профиль</a>
                    </button><button className={`${p.btn} ${p.profile__more}`}>
                        <a className={p.profile__more__link}>Еще</a><i></i>
                    </button>
                </div>
            </div>
            <div className={`container ${p.from__container}`}>
                <Createpost AddPost = {props.AddPost}/>
                <Posts PostsData = {props.profilePage.PostsData} />
            </div>
        </section>
    );
}

export default Profile;
