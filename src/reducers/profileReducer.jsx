const ADD_POST = 'ADD-POST'

const initialState = {

    PostsData: [
        { id: 1, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', text: 'Вы все ГОВНО' },
        { id: 2, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', text: 'Ты то хуесосина куда лезешь?' },
        { id: 3, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', text: 'Платформа ПК - это кусок говна' },
        { id: 4, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', text: 'Да у меня RTX. И ЧО?' },
    ],

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                PostsData: [...state.PostsData, { id: 5, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', text: action.text, }]
            }
        }

        default: return state

    }
}

export const addPostCreator = (text) => {
    return { type: ADD_POST, text: text }
}

export default profileReducer;

