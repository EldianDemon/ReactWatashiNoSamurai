import React from "react";
import { connect } from "react-redux";
import Auth from "./auth";
import { getAuth } from "../../../reducers/authReducer";
import { getAuthAPI } from "../../../api/api";

class AuthContainer extends React.Component {
    componentDidMount() {
        getAuthAPI()
        .then(data => {
            if(data.resultCode === 0) {
                this.props.setAuth(data.data)
            }
        })
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

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (data) => {
            dispatch(getAuth(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)