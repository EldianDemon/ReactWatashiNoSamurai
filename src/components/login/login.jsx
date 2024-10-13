import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    <Field component={'input'} name={'login'} placeholder={'Login'} />
                </label>
                <label>
                    <Field component={'input'} name={'password'} placeholder={'Password'} />
                </label>
                <label>
                   <Field component={'input'} type={'checkbox'} name={'rememberMe'} /> Remember me
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <LoginReduxForm onSubmit={onSubmit} />
}

export default Login