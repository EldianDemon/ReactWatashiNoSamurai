import React from 'react'
import Login from './login'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { useNavigate } from 'react-router-dom'
import { maxLengths } from '../../validators/validators'
import { loginThunkCreator } from '../../reducers/authReducer'

class LoginContainer extends React.Component {
    state = {
        auth: this.props.auth,
    }

    onSubmit = (formData) => {
        this.props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.auth !== this.props.auth) {
            this.setState({
                auth: this.props.auth,
            })
        }
    }
   
    render() {
        

        if(this.state.auth == false) return <LoginReduxForm onSubmit={this.onSubmit} maxLengths={maxLengths} />
        else return <>logged in</>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(Login)

export default connect(mapStateToProps, {loginThunkCreator})(LoginContainer)