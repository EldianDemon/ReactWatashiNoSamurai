import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Friends from './friends'
import { addFriendCreator } from '../../../reducers/friendsReducer'

class FriendsContainer extends React.Component {
    onSubmit = (formData) => {
        this.props.addFriendCreator(formData)
    }
    render() {
        return <FriendsReduxForm onSubmit={this.onSubmit} FriendsData={this.props.FriendsData} />;
    }
}

const mapStateToProps = (state) => {
    return {
        FriendsData: state.friendsPage.FriendsData
    }
}

const FriendsReduxForm = reduxForm({form: 'friendsForm'})(Friends)

export default connect(mapStateToProps, {
    addFriendCreator
})(FriendsContainer)
