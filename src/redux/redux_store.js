import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from '../reducers/profileReducer';
import messegesReducer from '../reducers/messegesReducer';
import friendsReducer from '../reducers/friendsReducer';

const reducers = combineReducers({
        profilePage: profileReducer,
        messegesPage: messegesReducer,
        friendsPage: friendsReducer,
    });

const store = createStore(reducers);

export default store;