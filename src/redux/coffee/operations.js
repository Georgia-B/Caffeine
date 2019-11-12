import actions from './actions';

const addOrder = (value) => actions.addOrder(value);
const updateStatus = (value) => actions.updateStatus(value);
const clearOrder = (value) => actions.clearOrder(value);

const coffeeOperations = {
    addOrder,
    updateStatus,
    clearOrder,
};

export default coffeeOperations;
