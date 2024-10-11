import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPostCreator, getProfileThunkCreator, getStatusThunkCreator } from '../../../reducers/profileReducer'
import Profile from './profile'
import { compose } from 'redux'

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() }
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = 31168
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        Profile: state.profilePage.Profile,
        PostsData: state.profilePage.PostsData
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileThunkCreator,
        getStatusThunkCreator,
        addPostCreator,
    }),
    withRouter
)(ProfileContainer)