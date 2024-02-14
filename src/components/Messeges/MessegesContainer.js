import React from "react";
import Messeges from "./Messeges";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessegesData: state.messegesPage.MessegesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MessegesContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges)

export default MessegesContainer;