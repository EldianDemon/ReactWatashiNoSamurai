const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'

let profileReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST:
            state.NewPost.text = action.text;
                return state;
        case ADD_POST:
            let NewPost = {
                id: 0,
                img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg',
                dscr: state.NewPost.text,
            }
                state.PostsData.push(NewPost);
                return state
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

