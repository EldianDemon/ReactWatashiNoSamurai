import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addFollowCreator, getPageCreator, getUsersCountCreator, getUsersCreator, removeFollowCreator, toggleFetchingCreator } from '../../../reducers/usersReducer'
import Users from './Users'

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.fetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.fetching(false)
                    this.props.setusers(response.data.items)
                    this.props.setuserscount(response.data.totalCount)
                })
        }
    }

    changePage = (el) => {
        this.props.setpage(el)
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.fetching(false)
                this.props.setusers(response.data.items)
            })
    }

    render() {
        return (
            <>
            {/* Здесь должен быть лоадер  */}
            {this.props.isFetching ? <span>Идет фетчинг</span> : null}
                <Users users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    selectedPage={this.props.selectedPage}
                    changePage={this.changePage}
                />
            </>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching
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
        },
        setuserscount: (userscount) => {
            dispatch(getUsersCountCreator(userscount))
        },
        setpage: (selectedPage) => {
            dispatch(getPageCreator(selectedPage))
        },
        fetching: (status) => {
            dispatch(toggleFetchingCreator(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);