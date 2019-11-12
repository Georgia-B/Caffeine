import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import OrderList from '../components/OrderList/OrderList';
import Loading from '../components/Loading/Loading';
import { coffeeSelectors } from '../redux';

const HomePage = (props) => {
    const { orders } = props;

    return <React.Fragment>
        <Header title="Caffeine" action={{ to: '/order', label: 'New order' }} />
        {orders === null ?
            <Loading />
            :
            <OrderList orders={orders} />
        }
    </React.Fragment>;
};

HomePage.propTypes = {
    orders: PropTypes.array,
};

const mapStateToProps = (state) => ({
    orders: coffeeSelectors.getOrders(state),
});

export default connect(mapStateToProps)(HomePage);
