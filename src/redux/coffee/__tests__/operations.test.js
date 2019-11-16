import coffeeActions from '../actions';
import coffeeOperations from '../operations';

describe('coffeeOperations', () => {
    it('should create a ADD_ORDER action', () => {
        expect(coffeeOperations.addOrder()).toEqual(coffeeActions.addOrder());
    });

    it('should create a CLEAR_ORDER action', () => {
        expect(coffeeOperations.clearOrder()).toEqual(coffeeActions.clearOrder());
    });

    it('should create a UPDATE_STATUS action', () => {
        expect(coffeeOperations.updateStatus()).toEqual(coffeeActions.updateStatus());
    });
});
