import { connect } from "react-redux";
import { addFollowCreator, getUsersCreator, removeFollowCreator } from "../../../reducers/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(addFollowCreator(id))
        },
        unfollow: (id) => {
            dispatch(removeFollowCreator(id))
        },
        setusers: (users) => {
            dispatch(getUsersCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer