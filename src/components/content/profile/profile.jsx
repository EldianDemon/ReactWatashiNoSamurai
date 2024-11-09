import React, { useState } from 'react'
import Post from './post/post'
import p from './profile.module.css'
import StatusContainer from './status/statusContainer'
import { Field } from 'redux-form'
import { required } from '../../../validators/validators'
import AvatarContainer from './avatar/avatarContainer'

const Profile = (props) => {

    let PostsOut = props.PostsData.map(
        el => <li><Post text={el.text} /></li>
    )
    if (!props.Profile) return <div>Something went wrong</div>
    return (
        <section className={p.profile}>
            <div className={p.profile__wallpaper}>
                <button className={`${p.btn} ${p.wallpaper_btn}`}>
                    <a href="" className={p.profile__wallpaper__edit__link}>Изменить фон</a>
                </button>
            </div>
            <div className={`container ${p.profile__container}`}>
                <div className={`${p.profile__avatarContainer}`}>
                    <AvatarContainer />
                </div>
                <div className={p.profile__body}>
                    <h3 className={p.profile__name}>{props.Profile.fullName}</h3>
                    <p className={p.profile__dscr}>

                    </p>
                    <div className={p.profile__btm}>
                        <div className={p.profile__location}>
                            <i></i>UserLocation
                        </div>
                        <div className={p.profile__job}><i></i>UserJob</div>
                        <StatusContainer />
                    </div>
                </div>
                <div className={p.profile_right}>
                    <button className={`${p.btn} ${p.profile__edit__btn}`}>
                        <a className={p.profile__edit__link}>Редактировать профиль</a>
                    </button>
                    <button className={`${p.btn} ${p.profile__more}`}>
                        <a className={p.profile__more__link}>Еще</a><i></i>
                    </button>
                </div>
            </div>
            <div className={`container ${p.from__container}`}>
                <form onSubmit={props.handleSubmit} className={p.profile__form}>
                    <h3>Создать пост</h3>
                    <Field component={'textarea'} name='post' validate={[required]} className={p.profile__textarea} />
                    <button className={`${p.btn} ${p.profile__btn}`}>
                        Отправить
                    </button>
                </form>
                <ul className={p.posts__list}>
                    {PostsOut}
                </ul>
            </div>
        </section>
    )



}

export default Profile
