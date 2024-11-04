import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'
const GET_AUTH = 'GET_AUTH'

const initialState = {
    data: {},
    auth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
                data: { ...action.data },
                auth: action.status
            }
        default: return state
    }
}

export const getAuth = (data, status) => {
    return { type: GET_AUTH, data, status }
}

export const authThunkCreator = () => (dispatch) => {
    return authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth(data.data, true))
            }
        })
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authThunkCreator())
            } dispatch(stopSubmit('login', { _error: 'everything is wrooong' }))
        })
}

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth(null, false))
            } else console.log('something went wrong')
        })
}

export default authReducer