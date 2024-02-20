import React from "react";
import p from '../../Profile.module.css'

const Createpost = (props) => {

    let TextUpdate = React.createRef();

    let ClickAddPost = () => {
        debugger
        let text = TextUpdate.current.value
        props.addPost(text)
    }

    return(
        <form action="" className={p.profile__form}>
            <h3>Создать пост</h3>
            <textarea ref={TextUpdate} className={p.profile__textarea}>
                
            </textarea>
            <button onClick={ClickAddPost} className={`${p.btn} ${p.profile__btn}`}>
                Отправить
            </button>
        </form>
    );
}

export default Createpost;