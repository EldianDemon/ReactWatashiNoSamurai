import React from "react";
import Friend from './Friend/Friend'
import f from './Friends.module.css'

const Friends = (props) => {

    const FriendsOut = props.friendsPage.FriendsData.map(
        el => <Friend id={el.id} useravatar={el.useravatar} username={el.username} userabout={el.userabout} />
    )

    return(
        <ul className={`container ${f.friends__list}`}>
            {FriendsOut}
        </ul>
    );
}

export default Friends;