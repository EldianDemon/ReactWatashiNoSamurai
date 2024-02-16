import React from "react";
import Createpost from "./Createpost";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../../reducers/profileReducer'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        NewPost: state.profilePage.NewPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        },
        updatePost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}

const CreatepostContainer = connect(mapStateToProps, mapDispatchToProps)(Createpost);

export default CreatepostContainer;