import React from 'react'
import { useState } from 'react'
import { Field } from 'redux-form'
import { File } from '../../../common/formFields/formField'
import p from '../profile.module.css'

const Avatar = (props) => {

    return (
        <>
            <div className={p.profile__imgContainer}>
                <img src={props.Profile.photos.large} alt="" className={p.profile__avatar} />
                <div className={p.profile__avatarChanger}>
                    <form onSubmit={props.handleSubmit}>
                        <Field component={File} name='image' />
                        <button>Send</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Avatar