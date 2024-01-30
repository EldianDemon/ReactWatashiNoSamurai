import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import messegesReducer from './messegesReducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messegesPage: messegesReducer
    }
)

let store = createStore(reducers);

export default store;