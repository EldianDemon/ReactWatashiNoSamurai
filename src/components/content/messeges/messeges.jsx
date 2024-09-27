import React, { useRef } from 'react'
import m from './messeges.module.css'
import Messege from './messege/messege'

const Messeges = (props) => {
    let MessegesOut = props.MessegesData.map(
        el => <li key={el.id} className={el.owner ? `${m.messeges__item} ${m.messeges__item_t}` : `${m.messeges__item} ${m.messeges__item_f}`}><Messege text={el.text} /></li>
    );

    let MessegeText = useRef();

    let AddMessege = () => {
        let text = MessegeText.current.value;
        props.AddMessege(text);
        MessegeText.current.value = ''; // Очистка поля ввода после добавления сообщения
    };

    return (
        <section>
            <div className="container">
                <ul className={m.messeges__list}>
                    {MessegesOut}
                </ul>
                <form action="" className={m.messeges__form}>
                    <textarea ref={MessegeText} className={m.messeges__text}></textarea>
                    <button type="button" onClick={AddMessege} className={m.messeges__btn}>Отправить</button>
                </form>
            </div>
        </section>
    );
};

export default Messeges;