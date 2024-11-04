import { authThunkCreator } from "./authReducer"

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

const initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state, initialize: true
            }

        default: return state
    }
}

const initializeSuccess = () => {
    return {type: INITIALIZE_SUCCESS}
}

export const initializeThunkCreator = () => (dispatch) => {
   let promise = dispatch(authThunkCreator())
   promise.then(() => {
    dispatch(initializeSuccess())
   })
}

export default appReducer