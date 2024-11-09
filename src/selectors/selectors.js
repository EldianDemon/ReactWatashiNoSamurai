import { createSelector } from "reselect"


const takeUsers = (state) => {
    return state.usersPage.users
}

export const takeProfile = (state) => {
    return state.profilePage.Profile
}

export const takeUsersSelectorCreator = createSelector(takeUsers, (users) => {
    return users.filter(u => true) //фейковая фильтрация для проверки работы реселекта
})