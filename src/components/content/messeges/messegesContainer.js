import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Messeges from './messeges'
import { addMessegeActionCreator } from '../../../reducers/messegesReducer'

class MessegesContainer extends React.Component {
    addMessegeSubmit = (formData) => {
        console.log(formData)
        this.props.addMessegeActionCreator(formData)
    }
    render() {
        return <MessegesReduxFormContainer onSubmit={this.addMessegeSubmit} MessegesData={this.props.MessegesData} />
    }
}

const mapStateToProps = (state) => {
    return {
        MessegesData: state.messegesPage.MessegesData
    }
}

const MessegesReduxFormContainer = reduxForm({form: 'messeges'})(Messeges)

MessegesContainer = connect(mapStateToProps, {addMessegeActionCreator})(MessegesContainer)
export default MessegesContainer
