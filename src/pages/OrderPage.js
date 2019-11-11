import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { coffeeOperations } from '../redux';
import Form from '../components/Form/Form';

class OrderPage extends Component {
    constructor() {
        super();
        this.placeOrder = this.placeOrder.bind(this);
    }

    placeOrder(order) {
        this.props.addOrder(order);
    }

    render() {
        return <div>
            <h1 className="title">Caffeine</h1>
            <Form placeOrder={this.placeOrder} />
        </div>;
    }
}

OrderPage.propTypes = {
    addOrder: PropTypes.func,
};

const mapDispachToProps = (dispatch) => bindActionCreators({
    addOrder: coffeeOperations.addOrder,
}, dispatch);

export default connect(null, mapDispachToProps)(OrderPage);
