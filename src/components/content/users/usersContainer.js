import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsersThunkCreator, setFollowThunkCreator, setUnfollowThunkCreator } from '../../../reducers/usersReducer'
import Users from './users'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(1, this.props.pageSize)
    }

    changePage = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    setFollow = (id) => {
        this.props.setFollowThunkCreator(id)
    }

    setUnfollow = (id) => {
        this.props.setUnfollowThunkCreator(id)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <span>Идет фетчинг</span> : null}
                <Users 
                    users={this.props.users}
                    setFollow={this.setFollow}
                    setUnfollow={this.setUnfollow}
                    buttonDisabled={this.props.buttonDisabled}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    selectedPage={this.props.selectedPage}
                    changePage={this.changePage}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,
        buttonDisabled: state.usersPage.buttonDisabled
    }
}

export default compose(connect(mapStateToProps, {
    getUsersThunkCreator, setFollowThunkCreator, setUnfollowThunkCreator,
    follow, unfollow,
}), withAuthRedirect)(UsersContainer)
