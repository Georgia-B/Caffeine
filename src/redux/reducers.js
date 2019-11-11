import { combineReducers } from 'redux';
import { appReducer } from './app';
import { coffeeReducer } from './coffee';

export const rootReducer = combineReducers({
    app: appReducer,
    coffee: coffeeReducer,
});
