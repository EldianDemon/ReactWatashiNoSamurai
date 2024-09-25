import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPostCreator, getProfileThunkCreator } from '../../../reducers/profileReducer'
import Profile from './Profile'

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()}
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfileThunkCreator(userId)
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

const WhitsUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfileThunkCreator,
    addPostCreator,
})(WhitsUrlContainerComponent)