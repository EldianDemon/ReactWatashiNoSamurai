import React from "react"
import Messegesin from "./Messegesin";
import { addMessegeActionCreator } from "../../../redux/messegesReducer";

const MessegesinContainer = (props) => {

    let addMessege = (text) => {
        let action = addMessegeActionCreator(text)
        props.store.dispatch(action)
    }

    return <Messegesin messegesPage={props.store.getState().messegesPage} addMessege={addMessege}/>
}

export default MessegesinContainer;