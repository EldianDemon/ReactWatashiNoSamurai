import { usersAPI } from '../api/api'
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
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.id === el.id) {
                        return {
                            ...el, followed: true
                        }
                    }
                    else return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.id === el.id) {
                        return {
                            ...el, followed: false
                        }
                    }
                    else return el
                })
            }
        case BUTTON_STATUS:
            return {
                ...state,
                buttonDisabled: action.status
                ? [...state.buttonDisabled, action.id]
                : state.buttonDisabled.filter(id => id != action.id)

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

export const buttonstatus = (status, id) => {
    return { type: BUTTON_STATUS, status, id}
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

export const setFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(buttonstatus(true, id))
        usersAPI.addFollow(id)
            .then(data => {
                dispatch(buttonstatus(false, id))
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                } else {
                    console.log('Something went wrong');
                }
            });
    }
}

export const setUnfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(buttonstatus(true, id))
        usersAPI.removeFollow(id)
            .then(data => {
                dispatch(buttonstatus(false, id))
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                    
                } else {
                    console.log('Something went wrong');
                }
            });
    }
}

export default usersReducer