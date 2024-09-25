import { profileAPI } from '../api/api'
const ADD_POST = 'ADD-POST'
const GET_PROFILE = 'GET-PROFILE'


const initialState = {
    Profile: null,
    PostsData: [
        { id: 1, useravatar: 'https://virtus-img.cdnvideo.ru/images/quote-author/plain/19/197b6b3e81310f34eb61f70d60220492.png@jpg', username: 'Антон Логвинов', text: 'I wroute some text'},
        { id: 2, useravatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/4078d528153b49bbb0f1eb678d28ba20/960x540', username: 'Киану Ривз', text: 'I wroute some text'},
        { id: 3, useravatar: 'https://sun9-78.userapi.com/s/v1/ig2/UtrRm-r9sRGdfocQyMWLaebXdqvcMvRycM9RqoU16Xka0FQ3doXdjhidCA203Gqhg7WEhbY6n-cO58u4wWvqGzP0.jpg?size=200x200&quality=96&crop=0,0,545,545&ava=1', username: 'Виталий Казунов', text: 'I wroute some text'},
        { id: 4, useravatar: 'https://amurlim.ru/wp-content/uploads/2021/12/shkredov-mihail.jpg', username: 'Михаил Шкредов', text: 'I wroute some text'},
        { id: 5, useravatar: 'https://play-lh.googleusercontent.com/460zz6qZ8PmIYrWKQBWhPe20FBCyUNKAsz3fakV-Ol0Zs3j1ImoR_3oYDe3BSZS2Xw', username: 'Соня Евгеньевна', text: 'I wroute some text'},
        { id: 6, useravatar: 'https://i.pinimg.com/564x/ec/51/ee/ec51ee1ec66cf6ead8aa6620ad5e8716.jpg', username: 'Виолетта Дмитриевна', text: 'I wroute some text'},
        { id: 7, useravatar: 'https://i.redd.it/chsyk2setbg41.jpg', username: 'Екатерина Владимирована', text: 'I wroute some text'},
        { id: 8, useravatar: 'https://posterspy.com/wp-content/uploads/2019/08/Homelander-Portrait-Smaller.jpg', username: 'Homelander', text: 'I wroute some text'},
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE: return {
            ...state,
            Profile: action.profile
        }
        case ADD_POST: {
            let stateCopy = {
                ...state,
                PostsData: [
                    {
                        id: 10,
                        useravatar: 'https://posterspy.com/wp-content/uploads/2019/08/Homelander-Portrait-Smaller.jpg',
                        username: 'Watashi',
                        text: action.text
                    },
                    ...state.PostsData
                ]
            }
            return stateCopy
        }
        default: {
            return state;
        }
    }
};

export const addPostCreator = (text) => {
    return { type: ADD_POST, text }
}

const getProfile = (profile) => {
    return {type: GET_PROFILE, profile}
}

export const getProfileThunkCreator = (id) => {
    return(dispatch) => {
        if(!id) {
            id = 11
        }
        profileAPI.getProfile(id)
        .then(data => {
            dispatch(getProfile(data))
        })
    }
}

export default profileReducer