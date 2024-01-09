import React from "react";
import './Profile.css';
import News from '../Posts/Posts'

const Profile = () => {
    return(
        <section className="sectionContent">
            <img className="content__img content__img_1" src='https://www.krqe.com/wp-content/uploads/sites/12/2022/12/AdobeStock_81556974.jpeg?w=2560&h=1440&crop=1' alt='wallpaper'></img>
            <div className="content__container">
                <img className="content__img content__img_2" src='https://i.pinimg.com/736x/77/b3/a1/77b3a1d79e8e1f836130b915c9715876.jpg' alt='marine'></img>
                <div className="content__info">
                    <h3 className="content__name">User Name</h3>
                    <ul className="content__list">
                        <li className="content__item">Date of Birth:</li>
                        <li className="content__item">City:</li>
                        <li className="content__item">Education:</li>
                        <li className="content__item">Web Site:</li>
                    </ul>
                </div>
            </div>
            <div className="content__box">
                <h3 className="content__post-head">My posts</h3>
                <form className="content__form">
                    <textarea className="form__text" placeholder="your news..."></textarea>
                    <button className="form__btn" type="submit">Send</button>
                </form>
                <News />
            </div>
        </section>
    );
}

export default Profile;