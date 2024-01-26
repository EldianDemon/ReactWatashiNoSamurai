import React from "react";
import p from '../../Profile/Profile.module.css'
import { UpdateNewPost } from "../../../redux/state";

const Createpost = (props) => {

    let NewPost = React.createRef();

    let SendPost = () => {
        let text = NewPost.current.value;
        props.AddPost(text);
    }

    let UpdateText = () => {
        let text = NewPost.current.value;
        UpdateNewPost(text)
    }

    return(
        <form action="" className={p.profile__form}>
            <h3>Создать пост</h3>
            <textarea onChange={UpdateText} value={props.NewPost[0].text} ref={NewPost} className={p.profile__textarea}>
                
            </textarea>
            <button onClick={SendPost} className={`${p.btn} ${p.profile__btn}`}>
                Отправить
            </button>
        </form>
    );
}

export default Createpost;