import types from './types';

export const initialState = {
    isLoading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.SET_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };
    default:
        return state;
    }
}
