import Messeges from "./Messeges";
import { connect } from "react-redux";
import { addMessegeActionCreator } from "../../../reducers/messegesReducer";

const mapStateToProps = (state) => {
    return {
        MessegesData: state.messegesPage.MessegesData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddMessege: (text) => {
            dispatch(addMessegeActionCreator(text))
        }
    }
}

const MessegesContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges)

export default MessegesContainer;