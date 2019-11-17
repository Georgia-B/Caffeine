import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import Header from '../components/Header/Header';
import OrderList from '../components/OrderList/OrderList';
import Loading from '../components/Loading/Loading';
import { coffeeSelectors } from '../redux';

const HomePage = (props) => {
    const { orders, t } = props;

    return <React.Fragment>
        <Header
            title={t('header.title')}
            action={{ to: '/order', label: t('header.orderButton') }}
        />
        {orders === null ?
            <Loading />
            :
            <OrderList orders={orders} />
        }
    </React.Fragment>;
};

HomePage.propTypes = {
    orders: PropTypes.array,
    t: PropTypes.func,
};

const mapStateToProps = (state) => ({
    orders: coffeeSelectors.getOrders(state),
});

export default withTranslation()(connect(mapStateToProps)(HomePage));
