import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { addPostCreator, getProfile } from "../../../reducers/profileReducer"
import Profile from "./Profile"
import axios from "axios"

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 11
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} Profile={this.props.Profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        Profile: state.profilePage.Profile,
        PostsData: state.profilePage.PostsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostCreator(text))
        },
        setProfile: (profile) => {
            dispatch(getProfile(profile))
        }
    }
}

const WhitsUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WhitsUrlContainerComponent)