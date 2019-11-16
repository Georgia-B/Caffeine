import { styleTypes, statusTypes, sizeTypes } from '../../../constants';
import actions from '../actions';
import types from '../types';

describe('coffeeActions', () => {
    it('should create an action to add an order', () => {
        const order = {
            style: styleTypes.cappuccino,
            size: sizeTypes.small.value,
        };

        expect(actions.addOrder(order)).toEqual({
            type: types.ADD_ORDER,
            payload: order,
        });
    });

    it('should create an action to clear an order', () => {
        const orderId = '12345';

        expect(actions.clearOrder(orderId)).toEqual({
            type: types.CLEAR_ORDER,
            payload: orderId,
        });
    });

    it('should create an action to update an order status', () => {
        const payload = {
            id: '12345',
            status: statusTypes.ready,
        };

        expect(actions.updateStatus(payload)).toEqual({
            type: types.UPDATE_STATUS,
            payload,
        });
    });
});
