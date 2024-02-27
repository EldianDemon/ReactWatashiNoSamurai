
import { getUsers, removeFollowCreator, addFollowCreator } from '../../../reducers/usersReducer'
import Users from './Users'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getusers: () => {
            dispatch(getUsers())
        },
        unfollow: (id) => {
            dispatch(removeFollowCreator(id))
        },
        follow: (id) => {
            dispatch(addFollowCreator(id))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;