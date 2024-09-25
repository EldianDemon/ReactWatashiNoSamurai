import React from 'react';
import Post from './Post/Post';
import p from './Profile.module.css';

const Profile = (props) => {

    let PostsOut = props.PostsData.map(
        el => <li><Post text={el.text} /></li>
    )

    let RefText = React.createRef()

    let ClickAddPost = () => {
        let text = RefText.current.value
        props.addPostCreator(text)
    }

    if(!props.Profile) {
        console.log('fetching')
    } else {
        return (
            <section className={p.profile}>
                <div className={p.profile__wallpaper}>
                    <button className={`${p.btn} ${p.wallpaper_btn}`}>
                        <a href="" className={p.profile__wallpaper__edit__link}>Изменить фон</a>
                    </button>
                </div>
                <div className={`container ${p.profile__container}`}>
                    <img src={props.Profile.photos.large} alt="" className={p.profile__avatar} />
                    <div className={p.profile__body}>
                        <h3 className={p.profile__name}>{props.Profile.fullName}</h3>
                        <p className={p.profile__dscr}>
    
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
                    <div className={p.profile__form}>
                        <h3>Создать пост</h3>
                        <textarea ref={RefText} className={p.profile__textarea}>
    
                        </textarea>
                        <button onClick={ClickAddPost} className={`${p.btn} ${p.profile__btn}`}>
                            Отправить
                        </button>
                    </div>
                    <ul className={p.posts__list}>
                        {PostsOut}
                    </ul>
                </div>
            </section>
        );
    }

    
}

export default Profile;
