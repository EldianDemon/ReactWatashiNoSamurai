import React from 'react'
import { Field } from 'redux-form'
import { required } from '../../validators/validators'
import { Input } from '../common/formFields/formField'
import l from './login.module.css'

const Login = (props) => {
    
    return(
        <div className={l.loginContainer}>
            <form onSubmit={props.handleSubmit} className={l.login__form}>
                <label>
                    <Field component={Input} type='email' name={'email'} validate={[required, props.maxLengths.max30]} placeholder={'Email'} />
                </label>
                <label>
                    <Field component={Input} type='password' name={'password'} validate={[required, props.maxLengths.max10]} placeholder={'Password'} />
                </label>
                <label>
                   <Field component={'input'} type={'checkbox'} name={'rememberMe'} /> Remember me
                </label>
                <button>Login</button>
                <span>{props.error}</span>
            </form>
        </div>
    )
}

export default Login



