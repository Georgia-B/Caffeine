import { createAction } from 'redux-actions';
import types from './types';

export default {
    addOrder: createAction(types.ADD_ORDER),
    clearOrder: createAction(types.CLEAR_ORDER),
    updateStatus: createAction(types.UPDATE_STATUS),
};
