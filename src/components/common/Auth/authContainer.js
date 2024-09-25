import React from "react"
import { connect } from "react-redux"
import Auth from "./auth"
import { authThunkCreator } from "../../../reducers/authReducer"

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.authThunkCreator()
    }
    render() {
        return <Auth {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {
    authThunkCreator,
})(AuthContainer)