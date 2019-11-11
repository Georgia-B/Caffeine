import { createAction } from 'redux-actions';
import types from './types';

export default {
    setLoading: createAction(types.SET_LOADING),
};
