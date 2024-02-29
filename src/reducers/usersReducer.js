let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let GET_USERS = 'GET-USERS'

const initialState = {
    users: [
        // {id: 1, followed: true, name: 'John'},
        // {id: 2, followed: true, name: 'John'},
        // {id: 3, followed: true, name: 'John'},
        // {id: 4, followed: true, name: 'John'},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    el => {
                        if (el.id === action.id) {
                            return {...el, followed: true}
                        }
                        else return el
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    el => {
                        if (el.id === action.id) {
                            return {...el, followed: false}
                        }
                        else return el
                    }
                )
            }

        case GET_USERS:
            return {
                ...state,
                users: [...action.users, ...state.users]
            }

        default:
            return state
    }
}

export const addFollowCreator = (id) => {
    return {type: FOLLOW, id}
}

export const removeFollowCreator = (id) => {
    return {type: UNFOLLOW, id}
}

export const getUsersCreator = (users) => {
    return {type: GET_USERS, users}
}

export default usersReducer