
import { addFollowCreator, removeFollowCreator, getUsers } from '../../../reducers/usersReducer'
import Users from './Users'
import { connect } from 'react-redux'

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
        getusers: () => {
            dispatch(getUsers())
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;