import React from 'react'
import Friend from './friend/friend'
import f from './friends.module.css'
import { Field } from 'redux-form'

const Friends = (props) => {

    const FriendsOut = props.FriendsData.map(
        el => <Friend key={el.id} id={el.id} useravatar={el.useravatar} username={el.username} userabout={el.userabout} />
    )

    return (
        <section>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name='username' />
                <button>Добавить друга</button>
            </form>
            <ul className={`container ${f.friends__list}`}>
                {FriendsOut}
            </ul>
        </section>
    )
}

export default Friends