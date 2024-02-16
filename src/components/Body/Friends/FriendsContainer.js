import Friends from "./Friends";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        FriendsData: state.friendsPage.FriendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;