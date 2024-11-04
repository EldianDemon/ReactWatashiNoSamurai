import { createSelector } from "reselect"


const takeUsers = (state) => {
    return state.usersPage.users
}

export const takeUsersSelectorCreator = createSelector(takeUsers, (users) => {
    return users.filter(u => true)
})