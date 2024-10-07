import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const navigate = useNavigate()
        if(!props.auth) navigate('/login')
        
            return <Component {...props} />
    }
    const ConnectedRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirect
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}



