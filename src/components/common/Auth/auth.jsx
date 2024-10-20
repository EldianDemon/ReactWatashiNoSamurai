import React from 'react'

const Auth = (props) => {
    if(props.auth == false) return <div>you r not logged yet</div>
    return(
        <div>
            <h3>{props.login}</h3>
            <button onClick={() => {props.logout()}}>Logout</button>
        </div>
    )
}

export default Auth