import Messeges from "./Messeges";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessegesData: state.messegesPage.MessegesData
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const MessegesContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges)

export default MessegesContainer;