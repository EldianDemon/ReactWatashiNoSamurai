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
    buttonDisabled: false
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

export const buttonstatus = (status) => {
    return { type: BUTTON_STATUS, status}
}

export const setusers = (users) => {
    return { type: GET_USERS, users }
}

export const setuserscount = (usersCount) => {
    return { type: GET_USERS_COUNT, usersCount }
}

export const setpage = (selectedPage) => {
    return { type: GET_PAGE, selectedPage }
}

export const fetching = (status) => {
    return { type: TOGGLE_FETCHING, status }
}

export default usersReducer