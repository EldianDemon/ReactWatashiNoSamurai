import React from "react";
import Createpost from "./Createpost";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer'

const CreatepostContainer = (props) => {

    let addPost = (text) => {
        let action = addPostActionCreator(text)
        props.store.dispatch(action)
    }

    let updatePost = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

  

    return <Createpost profilePage = {props.store.getState().profilePage} addPost = {addPost} updatePost = {updatePost} />
}

export default CreatepostContainer;