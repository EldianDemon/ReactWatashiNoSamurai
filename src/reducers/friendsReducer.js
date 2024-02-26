const ADD_FRIEND = 'ADD-FRIEND'

const initialState = {
    FriendsData: [
        { id: 1, useravatar: 'https://virtus-img.cdnvideo.ru/images/quote-author/plain/19/197b6b3e81310f34eb61f70d60220492.png@jpg', username: 'Антон Логвинов', userabout: 'doesnt have any info' },
        { id: 2, useravatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/4078d528153b49bbb0f1eb678d28ba20/960x540', username: 'Киану Ривз', userabout: 'doesnt have any info' },
        { id: 3, useravatar: 'https://sun9-78.userapi.com/s/v1/ig2/UtrRm-r9sRGdfocQyMWLaebXdqvcMvRycM9RqoU16Xka0FQ3doXdjhidCA203Gqhg7WEhbY6n-cO58u4wWvqGzP0.jpg?size=200x200&quality=96&crop=0,0,545,545&ava=1', username: 'Виталий Казунов', userabout: 'doesnt have any info' },
        { id: 4, useravatar: 'https://amurlim.ru/wp-content/uploads/2021/12/shkredov-mihail.jpg', username: 'Михаил Шкредов', userabout: 'doesnt have any info' },
        { id: 5, useravatar: 'https://play-lh.googleusercontent.com/460zz6qZ8PmIYrWKQBWhPe20FBCyUNKAsz3fakV-Ol0Zs3j1ImoR_3oYDe3BSZS2Xw', username: 'Соня Евгеньевна', userabout: 'doesnt have any info' },
        { id: 6, useravatar: 'https://i.pinimg.com/564x/ec/51/ee/ec51ee1ec66cf6ead8aa6620ad5e8716.jpg', username: 'Виолетта Дмитриевна', userabout: 'doesnt have any info' },
        { id: 7, useravatar: 'https://i.redd.it/chsyk2setbg41.jpg', username: 'Екатерина Владимирована', userabout: 'doesnt have any info' },
        { id: 8, useravatar: 'https://posterspy.com/wp-content/uploads/2019/08/Homelander-Portrait-Smaller.jpg', username: 'Homelander', userabout: 'lorem imptum huipsum' },
    ],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND: {
            let stateCopy = {
                ...state,
                FriendsData: [
                    {
                        id: 10,
                        useravatar: 'https://posterspy.com/wp-content/uploads/2019/08/Homelander-Portrait-Smaller.jpg',
                        username: action.username,
                        userabout: 'lorem imptum huipsum'
                    },
                    ...state.FriendsData
                ]
            }
            return stateCopy
        }
        default: {
            return state;
        }
    }
};

export const addFriendCreator = (username) => {
    return { type: ADD_FRIEND, username: username }
}

export default friendsReducer