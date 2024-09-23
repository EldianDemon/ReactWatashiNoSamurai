import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import profileReducer from '../reducers/profileReducer'
import messegesReducer from '../reducers/messegesReducer'
import friendsReducer from '../reducers/friendsReducer'
import usersReducer from '../reducers/usersReducer'
import authReducer from '../reducers/authReducer'

const reducers = combineReducers({
        auth: authReducer,
        profilePage: profileReducer,
        messegesPage: messegesReducer,
        friendsPage: friendsReducer,
        usersPage: usersReducer
    });

const store = createStore(reducers, applyMiddleware(thunk));

export default store