import React from "react";
import Createpost from "./Createpost";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer'
import StoreContext from "../../../StoreContext";

const CreatepostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let addPost = (text) => {
                        let action = addPostActionCreator(text)
                        store.dispatch(action)
                    }
                
                    let updatePost = (text) => {
                        let action = updateNewPostActionCreator(text)
                        store.dispatch(action)
                    }

                    return <Createpost profilePage={store.getState().profilePage} addPost={addPost} updatePost={updatePost} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default CreatepostContainer;