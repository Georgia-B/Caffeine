import types from './types';

export const initialState = {
    orders: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.ADD_ORDER:
        return {
            ...state,
            orders: [...state.orders, action.payload],
        };
    default:
        return state;
    }
}
