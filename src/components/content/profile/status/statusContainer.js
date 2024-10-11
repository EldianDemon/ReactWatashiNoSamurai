import React from 'react'
import Status from './status'
import { connect } from 'react-redux'
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../../reducers/profileReducer'

class StatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false,
        })
    }
    statusChange = (status) => {
        this.setState({
            status: status.currentTarget.value
        })
    }
    applyChanges = () => {
        this.props.updateStatusThunkCreator(this.state.status)
    }
    render() {
        return <Status {...this.props} 
        editMode={this.state.editMode} 
        activeEditMode={this.activeEditMode} 
        deactiveEditMode={this.deactiveEditMode} 
        statusChange={this.statusChange}
        applyChanges={this.applyChanges}
        status={this.state.status} />
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, {getStatusThunkCreator, updateStatusThunkCreator})(StatusContainer)