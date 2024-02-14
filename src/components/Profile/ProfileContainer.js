import React from "react";
import Profile from "./Profile";
import { Connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;
