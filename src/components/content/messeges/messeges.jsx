import React, { useRef } from 'react'
import m from './messeges.module.css'
import Messege from './messege/messege'
import { Field } from 'redux-form'

const Messeges = (props) => {
    let MessegesOut = props.MessegesData.map(
        el => <li key={el.id} className={el.owner ? `${m.messeges__item} ${m.messeges__item_t}` : `${m.messeges__item} ${m.messeges__item_f}`}><Messege text={el.text} /></li>
    )

    return (
        <section>
            <div className='container'>
                <ul className={m.messeges__list}>
                    {MessegesOut}
                </ul>
                <form onSubmit={props.handleSubmit} className={m.messeges__form}>
                    <Field component={'textarea'} name='messege' className={m.messeges__text} />
                    <button className={m.messeges__btn}>Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default Messeges