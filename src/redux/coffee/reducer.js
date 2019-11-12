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
    case types.UPDATE_STATUS:
        return {
            ...state,
            orders: state.orders.map((order) => {
                if (order.id !== action.payload.id) {
                    return order;
                }

                return {
                    ...order,
                    status: action.payload.status,
                };
            }),
        };

    case types.CLEAR_ORDER:
        return {
            ...state,
            orders: state.orders.filter((order) => order.id !== action.payload),
        };
    default:
        return state;
    }
}
