import React from "react"
import Messegesin from "./Messegesin";
import { addMessegeActionCreator } from "../../../reducers/messegesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messegesPage: state.messegesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessege: (text) => {
            let action = addMessegeActionCreator(text)
            dispatch(action)
        }
    }
}

const MessegesinContainer = connect(mapStateToProps, mapDispatchToProps)(Messegesin)

export default MessegesinContainer;