import React from "react";
import m from './Messeges.module.css'
import Messege from "./Messege/Messege";

const Messeges = (props) => {
    debugger
    let MessegesOut = props.MessegesData.map(
        el => <li className={el.owner ? `${m.messeges__item} ${m.messeges__item_t}` : `${m.messeges__item} ${m.messeges__item_f}`}><Messege text={el.text} /></li>
    )

    let MessegeText = React.createRef()

    let AddMessege = () => {
        let text = MessegeText.current.value
        props.AddMessege(text)
    }

    return (
        <section>
            <div className="container">
                <ul className={m.messeges__list}>
                    {MessegesOut}
                </ul>
                <form action="" className={m.messeges__form}>
                    <textarea ref={MessegeText} className={m.messeges__text}></textarea>
                    <button onClick={AddMessege} className={m.messeges__btn}>Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default Messeges;