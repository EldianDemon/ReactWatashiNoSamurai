import { getAuthAPI } from '../api/api'
const GET_AUTH = 'GET_AUTH'

const initialState = {
    resultCode: 0,
    messages: [],
    data: {
      id: null,
      email: null,
      login: null
    },
    auth: false
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_AUTH:
            return {
                ...state,
                data: {...action.data},
                auth: action.status
            }
        default: return state
    }
}

export const getAuth = (data, status) => {
    return {type: GET_AUTH, data, status}
}

export const authThunkCreator = () => {
    return(dispatch) => {
        getAuthAPI()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuth(data.data, true))
            }
        })
    }
}

export default authReducer