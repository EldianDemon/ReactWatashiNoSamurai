import React from "react";
import p from '../../Profile/Profile.module.css'

const Createpost = (props) => {

    let NewPost = React.createRef();

    let SendPost = () => {
        let text = NewPost.current.value
        props.addPost(text)
    }

    let UpdateText = () => {
        let text = NewPost.current.value
        props.updatePost(text)
    }

    return(
        <form action="" className={p.profile__form}>
            <h3>Создать пост</h3>
            <textarea onChange={UpdateText} value={props.profilePage.NewPost.text} ref={NewPost} className={p.profile__textarea}>
                
            </textarea>
            <button onClick={SendPost} className={`${p.btn} ${p.profile__btn}`}>
                Отправить
            </button>
        </form>
    );
}

export default Createpost;