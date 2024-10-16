import React from 'react'

const Followed = (props) => {
    let usersOut = props.users.map((el) => {
        if(el.followed) return <li><img src={el.photos.small} width={'24px'} /> {el.name}</li>
    })
    if(props.users.length === 0) console.log('loading')
    else
    return (
        <section className='block'>
            <h3>Подписки на этой странице</h3>
            <ul>
                {usersOut}
            </ul>
        </section>
    )
}

export default Followed