import { coffeeReducer, coffeeTypes, coffeeInitialState } from '../../coffee';

describe('coffeeReducer', () => {
    it('should return the initial state', () => {
        expect(coffeeReducer(undefined, {})).toEqual(coffeeInitialState);
    });

    it('should handle ADD_ORDER', () => {
        const payload = {
            type: 'Latte',
            size: 'Large',
        };

        expect(coffeeReducer({ orders: [] }, {
            type: coffeeTypes.ADD_ORDER,
            payload,
        })).toEqual({
            orders: [payload],
        });
    });

    it('should handle CLEAR_ORDER', () => {
        const initialState = {
            orders: [{
                id: '123',
                type: 'Latte',
            }],
        };

        expect(coffeeReducer(initialState, {
            type: coffeeTypes.CLEAR_ORDER,
            payload: '123',
        })).toEqual({
            orders: [],
        });
    });

    it('should handle UPDATE_STATUS', () => {
        const initialState = {
            orders: [{
                id: '123',
                type: 'Lattte',
                status: 'Brewing',
            }],
        };

        const payload = {
            id: '123',
            status: 'Ready',
        };

        expect(coffeeReducer(initialState, {
            type: coffeeTypes.UPDATE_STATUS,
            payload,
        })).toEqual({
            orders: [{
                id: '123',
                type: 'Lattte',
                status: 'Ready',
            }],
        });
    });
});
