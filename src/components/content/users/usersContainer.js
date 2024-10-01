import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsersThunkCreator, setFollowThunkCreator, setUnfollowThunkCreator } from '../../../reducers/usersReducer'
import Users from './users'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.selectedPage, this.props.pageSize)
    }

    changePage = (page) => {
        this.props.getUsersThunkCreator(page)
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
                    auth={this.props.auth}
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
        auth: state.auth.auth,
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,
        buttonDisabled: state.usersPage.buttonDisabled
    };
}

export default connect(mapStateToProps, {
    getUsersThunkCreator, setFollowThunkCreator, setUnfollowThunkCreator,
    follow, unfollow,
})(UsersContainer)
