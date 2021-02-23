import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

export const Reducers = combineReducers({
    user: userReducer,
    profile: profileReducer
})