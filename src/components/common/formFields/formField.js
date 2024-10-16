import React from 'react'
import f from './formField.module.css'

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={f.inputContainer}>
            <span className={f.input__errorText}>{meta.touched && meta.error}</span>
            <input {...input} {...props} className={!(meta.touched && meta.error) ?  f.input : `${f.input} ${f.input__error}`} />
        </div>
    )
}