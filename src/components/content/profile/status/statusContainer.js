import React, { useState } from 'react'
import Status from './status'
import { connect } from 'react-redux'
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../../reducers/profileReducer'

class StatusContainer extends React.Component {
  
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    applyChanges = (status) => {
        debugger
        this.props.updateStatusThunkCreator(status)
    }
    render() {
        return <Status status={this.props.status} applyChanges={this.applyChanges} />
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, { getStatusThunkCreator, updateStatusThunkCreator })(StatusContainer)