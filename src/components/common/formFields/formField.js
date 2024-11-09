import React from 'react'
import f from './formField.module.css'

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={f.inputContainer}>
            <span className={f.input__errorText}>{meta.touched && meta.error}</span>
            <input {...input}  className={!(meta.touched && meta.error) ?  f.input : `${f.input} ${f.input__error}`} />
        </div>
    )
}

export const File = ({ input, meta, ...props }) => {
    const handleChange = (event) => {
        const file = event.target.files[0]
        input.onChange(file) // Обновляем состояние формы с выбранным файлом
    }

    return (
        <div>
            <input type="file" className={f.inputFile} onChange={handleChange} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}
