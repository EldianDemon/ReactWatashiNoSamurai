import React from 'react'
import Login from './login'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { maxLengths } from '../../validators/validators'

class LoginContainer extends React.Component {
    state = {
        auth: this.props.auth,
    }

    onSubmit = (formData) => {
        console.log(formData)
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
        else return <div>You have already authorized</div>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(Login)

export default connect(mapStateToProps)(LoginContainer)