import React from 'react'
import Friend from './friend/friend'
import f from './friends.module.css'

const Friends = (props) => {

    let FriendName = React.createRef()

    let ClickAddFriend = () => {
        let username = FriendName.current.value
        props.addFriend(username)
    }

    const FriendsOut = props.FriendsData.map(
        el => <Friend key={el.id} id={el.id} useravatar={el.useravatar} username={el.username} userabout={el.userabout} />
    )

    return (
        <section>
            <div>
                <textarea ref={FriendName}></textarea>
                <button onClick={ClickAddFriend}>Добавить друга</button>
            </div>
            <ul className={`container ${f.friends__list}`}>
                {FriendsOut}
            </ul>
        </section>
    );
}

export default Friends;