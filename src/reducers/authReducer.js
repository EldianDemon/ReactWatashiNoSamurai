const GET_AUTH = 'GET_AUTH'

const initialState = {
    resultCode: 0,
    messages: [],
    data: {
      id: null,
      email: null,
      login: null
    }
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_AUTH:
            return {
                ...state,
                data: {...action.data}
            }
        default: return state
    }
}

export const getAuth = (data) => {
    return {type: GET_AUTH, data}
}

export default authReducer