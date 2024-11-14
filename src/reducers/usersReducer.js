import { usersAPI } from '../api/api'
import { followMaper } from '../utility/reducerHelper'
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let BUTTON_STATUS = 'BUTTON_STATUS'
let GET_USERS = 'GET-USERS'
let GET_USERS_COUNT = 'GET-USERS-COUNT'
let GET_PAGE = 'GET-PAGE'
let TOGGLE_FETCHING = 'TOGGLE_FETCHING'

const initialState = {
    users: [],
    usersCount: 0,
    pageSize: 5,
    selectedPage: 1,
    isFetching: false,
    buttonDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: followMaper(state.users, action.id, { followed: true })
        }
        case UNFOLLOW: return {
            ...state,
            users: followMaper(state.users, action.id, { followed: false })
        }
        case BUTTON_STATUS:
            return {
                ...state,
                buttonDisabled: action.status
                    ? [...state.buttonDisabled, action.id]
                    : state.buttonDisabled.filter(id => id !== action.id)

            }
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        case GET_USERS_COUNT:
            return {
                ...state,
                usersCount: action.usersCount
            }
        case GET_PAGE:
            return {
                ...state,
                selectedPage: action.selectedPage
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        default: return state
    }
}

export const follow = (id) => {
    return { type: FOLLOW, id }
}

export const unfollow = (id) => {
    return { type: UNFOLLOW, id }
}

const buttonstatus = (status, id) => {
    return { type: BUTTON_STATUS, status, id }
}

const setusers = (users) => {
    return { type: GET_USERS, users }
}

const setuserscount = (usersCount) => {
    return { type: GET_USERS_COUNT, usersCount }
}

export const setpage = (selectedPage) => {
    return { type: GET_PAGE, selectedPage }
}

const fetching = (status) => {
    return { type: TOGGLE_FETCHING, status }
}

export const getUsersThunkCreator = (selectedPage, pageSize) => {
    return (dispatch) => {
        dispatch(fetching(true))
        usersAPI.getUsers(selectedPage, pageSize)
            .then(data => {
                dispatch(fetching(false))
                dispatch(setpage(selectedPage))
                dispatch(setusers(data.items))
                dispatch(setuserscount(data.totalCount))
            })
    }
}

const setFollowStatus = async (dispatch, id, apiMethod, followSuccess) => {
    dispatch(buttonstatus(true, id))
    let data = await apiMethod(id)
    dispatch(buttonstatus(false, id))
    if (data.resultCode === 0) {
        dispatch(followSuccess(id))
    } else {
        console.log('Something went wrong')
    }
}

export const setFollowThunkCreator = (id) => (dispatch) => {
    const apiMethod = usersAPI.addFollow.bind(usersAPI)
    const followSuccess = follow
    setFollowStatus(dispatch, id, apiMethod, followSuccess)
}

export const setUnfollowThunkCreator = (id) => (dispatch) => {
    const apiMethod = usersAPI.removeFollow.bind(usersAPI)
    const followSuccess = unfollow
    setFollowStatus(dispatch, id, apiMethod, followSuccess)
}

export default usersReducer