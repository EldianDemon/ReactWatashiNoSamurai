import React from 'react'
import Avatar from './avatar'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { takeProfile } from '../../../../selectors/selectors'
import {sendPhotoThunkCreator} from '../../../../reducers/profileReducer'

class AvatarContainer extends React.Component {

    sendPhoto = (formData) => {
        this.props.sendPhotoThunkCreator(formData)
    }
    
    render() {
        return <AvatarReduxForm onSubmit={this.sendPhoto} {...this.props} />
    }
}

const AvatarReduxForm = reduxForm({form: 'avatarChanger'})(Avatar)

const mapStateToProps = (state) => {
    return {
        Profile: takeProfile(state)
    }
}

export default connect(mapStateToProps, {sendPhotoThunkCreator})(AvatarContainer)