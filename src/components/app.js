import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { coffeeOperations, coffeeSelectors } from '../redux';
import Form from './Form/Form';

class App extends Component {
    constructor() {
        super();
        this.placeOrder = this.placeOrder.bind(this);
    }

    placeOrder(order) {
        this.props.addOrder(order);
    }

    render() {
        const { orders } = this.props;

        return <div>
            <h1 className="title">Caffeine</h1>
            <Form placeOrder={this.placeOrder} />
            {orders.map((order) => {
                return <div key={order.type}>
                    {order.size} {order.milk} - {order.type}
                </div>;
            })}
        </div>;
    }
}

App.propTypes = {
    orders: PropTypes.array,
    addOrder: PropTypes.func,
};

const mapStateToProps = (state) => ({
    orders: coffeeSelectors.getOrders(state),
});

const mapDispachToProps = (dispatch) => bindActionCreators({
    addOrder: coffeeOperations.addOrder,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(App);
