import React from 'react'

const Auth = (props) => {
    if(props.auth == false) return <div>you r not logged yet</div>
    return(
        <div>
            <h3>{props.login}</h3>
        </div>
    )
}

export default Auth