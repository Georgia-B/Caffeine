import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { coffeeOperations } from '../redux';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

class OrderPage extends Component {
    constructor() {
        super();
        this.placeOrder = this.placeOrder.bind(this);
    }

    placeOrder(order) {
        this.props.addOrder(order);
    }

    render() {
        return <React.Fragment>
            <Header title="Caffeine" action={{ to: '/', label: 'Order status' }} />
            <Form placeOrder={this.placeOrder} />
        </React.Fragment>;
    }
}

OrderPage.propTypes = {
    addOrder: PropTypes.func,
};

const mapDispachToProps = (dispatch) => bindActionCreators({
    addOrder: coffeeOperations.addOrder,
}, dispatch);

export default connect(null, mapDispachToProps)(OrderPage);
