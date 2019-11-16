import { coffeeReducer, coffeeTypes, coffeeInitialState } from '../../coffee';
import { styleTypes, statusTypes, sizeTypes } from '../../../constants';

describe('coffeeReducer', () => {
    it('should return the initial state', () => {
        expect(coffeeReducer(undefined, {})).toEqual(coffeeInitialState);
    });

    it('should handle ADD_ORDER', () => {
        const payload = {
            style: styleTypes.cappuccino,
            size: sizeTypes.small,
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
                style: styleTypes.cappuccino,
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
                style: styleTypes.cappuccino,
                status: statusTypes.brewing,
            }],
        };

        const payload = {
            id: '123',
            status: statusTypes.ready,
        };

        expect(coffeeReducer(initialState, {
            type: coffeeTypes.UPDATE_STATUS,
            payload,
        })).toEqual({
            orders: [{
                id: '123',
                style: styleTypes.cappuccino,
                status: statusTypes.ready,
            }],
        });
    });
});
