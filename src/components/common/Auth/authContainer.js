import React from "react";
import { connect } from "react-redux";
import Auth from "./auth";
import axios from "axios";
import { getAuth } from "../../../reducers/authReducer";

class AuthContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0) {
                this.props.setAuth(response.data.data)
            }
        })
    }
    render() {
        return <Auth {...this.props} />
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        login: state.auth.data.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (data) => {
            dispatch(getAuth(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)