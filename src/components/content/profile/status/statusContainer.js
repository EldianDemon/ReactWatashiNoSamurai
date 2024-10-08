import React from 'react'
import Status from './status'
import { connect } from 'react-redux'

class StatusContainer extends React.Component {
    state = {
        editMode: false
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return <Status {...this.props} 
        editMode={this.state.editMode} 
        activeEditMode={this.activeEditMode} 
        deactiveEditMode={this.deactiveEditMode} 
        status={'here your status will be'} />
    }
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps)(StatusContainer)