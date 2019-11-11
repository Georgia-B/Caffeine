import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import initialState from './initialState';

export const createReduxStore = () => {
    const enhancer = (window && window.__REDUX_DEVTOOLS_EXTENSION__)
        ? compose(window.__REDUX_DEVTOOLS_EXTENSION__())
        : null;

    const store = createStore(rootReducer, initialState, enhancer);

    return { store };
};
