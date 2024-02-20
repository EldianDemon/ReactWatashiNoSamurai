import Friends from "./Friends";
import { connect } from "react-redux";
import { addFriendCreator } from "../../../reducers/friendsReducer";

let mapStateToProps = (state) => {
    return {
        FriendsData: state.friendsPage.FriendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (username) => {
            dispatch(addFriendCreator(username))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;