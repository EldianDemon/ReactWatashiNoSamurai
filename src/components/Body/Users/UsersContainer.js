import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setusers, setuserscount, setpage, fetching, buttonstatus } from './../../../reducers/usersReducer';
import { usersAPI } from '../../../api/api';
import Users from './Users'

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.fetching(true);
            usersAPI.getUsers(this.props.selectedPage, this.props.pageSize)
                .then(data => {
                    this.props.fetching(false);
                    this.props.setusers(data.items);
                    this.props.setuserscount(data.totalCount);
                });
        }
    }

    changePage = (page) => {
        this.props.setpage(page);
        this.props.fetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.fetching(false);
                this.props.setusers(data.items);
            });
    }

    setFollow = (id) => {
        this.props.buttonstatus(true, id)
        usersAPI.addFollow(id)
            .then(data => {
                this.props.buttonstatus(false, id)
                if (data.resultCode === 0) {
                    this.props.follow(id);
                } else {
                    console.log('Something went wrong');
                }
            });
    }

    setUnfollow = (id) => {
        this.props.buttonstatus(true, id)
        usersAPI.removeFollow(id)
            .then(data => {
                this.props.buttonstatus(false, id)
                if (data.resultCode === 0) {
                    this.props.unfollow(id);
                } else {
                    console.log('Something went wrong');
                }
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <span>Идет фетчинг</span> : null}
                <Users users={this.props.users}
                    setFollow={this.setFollow}
                    setUnfollow={this.setUnfollow}
                    buttonDisabled={this.props.buttonDisabled}
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
        isFetching: state.usersPage.isFetching,
        buttonDisabled: state.usersPage.buttonDisabled
    };
}

export default connect(mapStateToProps, {
    follow, unfollow, buttonstatus, setusers, setuserscount, setpage, fetching
})(UsersContainer);
