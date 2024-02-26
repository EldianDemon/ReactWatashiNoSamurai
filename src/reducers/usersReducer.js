let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let GET_USERS = 'GET-USERS'

const initialState = {
    users: [
        { id: 1, username: 'Eldian_Demon', followed: true },
        { id: 2, username: 'Твердый кал', followed: false },
        { id: 3, username: 'Хейтер Якудзы', followed: true },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.id === el.id) {
                        return { ...el, followed: true }
                    }
                    else return el
                })
            }

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(el => {
                    if (action.id === el.id) {
                        return { ...el, followed: false }
                    }
                    else return el
            })
        }
        
        case GET_USERS:
            return {
                ...state, users: [ ...state.users, ...action.users ]
            }
    }
    return state
}

export const addFollowCreator = (id) => {
    return { type: FOLLOW, id }
}

export const removeFollowCreator = (id) => {
    return { type: UNFOLLOW, id }
}

export const getUsers = (users) => {
    return { type: GET_USERS, users}
}

export default usersReducer