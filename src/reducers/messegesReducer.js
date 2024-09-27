const ADD_MESSEGE = 'ADD-MESSEGE'

const initialState = {
    MessegesData: [
        { id: 1, owner: false, text: 'Hello, whats up?' },
        { id: 2, owner: true, text: 'Kinda sad' },
        { id: 3, owner: true, text: 'And you?' },
        { id: 4, owner: false, text: 'Its okay, I guess...' },
        { id: 5, owner: false, text: 'life is shit' },
        { id: 6, owner: false, text: 'nobody cares' },
        { id: 7, owner: true, text: 'thats the way it is' },
        { id: 8, owner: false, text: 'thats the way it is...' },
    ],
};

const messegesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSEGE:
            let stateCopy = {
                ...state,
                MessegesData: [
                    ...state.MessegesData,
                    {
                        id: action.id,
                        owner: true,
                        text: action.text
                    }
                ]
            };
            return stateCopy
        default:
            return state;
    }
};

export const addMessegeActionCreator = (text) => {
    return { type: ADD_MESSEGE, id: 2, text: text }
};

export default messegesReducer;