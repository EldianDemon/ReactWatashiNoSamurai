import React from 'react'
import { connect } from 'react-redux'
import Auth from './auth'
import { authThunkCreator, logoutThunkCreator } from '../../../reducers/authReducer'

class AuthContainer extends React.Component {
    componentDidMount() {
        
    }

    logout = () => {
        this.props.logoutThunkCreator()
    }

    render() {
        return <Auth logout={this.logout} {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps, {
    authThunkCreator, logoutThunkCreator
})(AuthContainer)