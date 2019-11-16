import coffeeSelectors from '../selectors';

describe('coffeeSelectors', () => {
    it('should return the array of orders set on the state', () => {
        const orders = [{
            id: '123',
            type: 'Latte',
        }];

        const state = {
            coffee: {
                orders,
            },
        };

        expect(coffeeSelectors.getOrders(state)).toEqual(orders);
    });
});
