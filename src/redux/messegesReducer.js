const ADD_MESSEGE = 'ADD-MESSEGE'

let messegesReducer = (state, action) => {

    if (action.type === ADD_MESSEGE) {
    let NewMessege = { text: action.dscr };
    state.MessegesinData.push(NewMessege)
    return state;
    }

}

export const addMessegeActionCreator = (text) => {
    return {type: ADD_MESSEGE, dscr: text}
}

export default messegesReducer;