import Profile from "./Profile"
import { addPostCreator } from "../../../reducers/profileReducer"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        PostsData: state.profilePage.PostsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostCreator(text))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;