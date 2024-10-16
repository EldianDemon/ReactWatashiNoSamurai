import React from 'react'
import { connect } from 'react-redux'
import Followed from './followed'

class FollowedContainer extends React.Component {
    state = {
        users: this.props.users
    }
    componentDidMount() {
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.users !== this.props.users) {
            this.setState({
                users: this.props.users
            })
        }
    }
    render() {
        return <Followed users={this.state.users} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {})(FollowedContainer)