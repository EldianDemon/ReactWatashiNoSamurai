const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'

const initialState = {

    PostsData: [
        { id: 1, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Вы все ГОВНО' },
        { id: 2, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Ты то хуесосина куда лезешь?' },
        { id: 3, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Платформа ПК - это кусок говна' },
        { id: 4, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Да у меня RTX. И ЧО?' },
    ],

    NewPost: { text: 'you motherfucker' },

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let NewPost = {
                id: 0,
                img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg',
                dscr: state.NewPost.text,
            }
            let stateCopy = {...state}
            stateCopy.PostsData = [...state.PostsData]
            state.PostsData.push(NewPost);
            return stateCopy
        }

        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.NewPost = {...state.NewPost}
            stateCopy.NewPost.text = action.text;
            return stateCopy;
        }

        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST, text: text }
}

export default profileReducer;

