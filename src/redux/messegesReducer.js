const ADD_MESSEGE = 'ADD-MESSEGE'

const initialState = {
    MessegesData: [
        { id: 1, username: 'Anya', lastmessege: '15.1.2024' },
        { id: 2, username: 'Sonya', lastmessege: '11.1.2024' },
        { id: 3, username: 'Violetta', lastmessege: '13.1.2024' },
        { id: 4, username: 'Nastya', lastmessege: '12.1.2024' },
    ],

    Messegesin: {
        MessegesinData: [
            { text: 'Hello' },
            { text: 'How are you?' },
            { text: 'Fuck you asshole' },
        ],
    }
};

const messegesReducer = (state = initialState, action) => {

    if (action.type === ADD_MESSEGE) {
        let NewMessege = { text: action.dscr };
        state.Messegesin.MessegesinData.push(NewMessege)
        return state;
    }
    return state;
}

export const addMessegeActionCreator = (text) => {
    return { type: ADD_MESSEGE, dscr: text }
}

export default messegesReducer;