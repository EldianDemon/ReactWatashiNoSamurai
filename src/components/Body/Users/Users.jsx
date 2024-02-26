import React from 'react';
import User from './User/User';
import u from './Users.module.css'

const Users = (props) => {

    let UsersOut = props.users.map(el => <li className={u.users__item}><User username={el.username} followed={el.followed} /></li>)

    return (
        <div className='container'>
            <ul className={u.users__list}>
                {UsersOut}
            </ul>
        </div>
    )
}

export default Users;