import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import profileReducer from '../reducers/profileReducer'
import messegesReducer from '../reducers/messegesReducer'
import friendsReducer from '../reducers/friendsReducer'
import usersReducer from '../reducers/usersReducer'
import authReducer from '../reducers/authReducer'
import appReducer from '../reducers/appReducer'

const reducers = combineReducers({
        app: appReducer,
        form: formReducer,
        auth: authReducer,
        profilePage: profileReducer,
        messegesPage: messegesReducer,
        friendsPage: friendsReducer,
        usersPage: usersReducer
    })

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store