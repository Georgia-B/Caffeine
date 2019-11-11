import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkButton from '../components/LinkButton/LinkButton';
import OrderList from '../components/OrderList/OrderList';
import { coffeeSelectors } from '../redux';

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        const { orders } = this.props;

        return <div>
            <h1 className="title">Caffeine</h1>
            <LinkButton to="/order" label="New order" />
            <OrderList orders={orders} />
        </div>;
    }
}

HomePage.propTypes = {
    orders: PropTypes.array,
};

const mapStateToProps = (state) => ({
    orders: coffeeSelectors.getOrders(state),
});

export default connect(mapStateToProps)(HomePage);
