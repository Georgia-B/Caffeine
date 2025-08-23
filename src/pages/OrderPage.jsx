import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { coffeeOperations } from '../redux';

class OrderPage extends Component {
    constructor() {
        super();
        this.placeOrder = this.placeOrder.bind(this);
    }

    placeOrder(order) {
        this.props.addOrder(order);
    }

    render() {
        const { t } = this.props;

        return <React.Fragment>
            <Header
                title={t('header.title')}
                action={{ to: '/', label: t('header.statusButton') }}
            />
            <Form placeOrder={this.placeOrder} />
        </React.Fragment>;
    }
}

OrderPage.propTypes = {
    addOrder: PropTypes.func,
    t: PropTypes.func,
};

const mapDispachToProps = (dispatch) => bindActionCreators({
    addOrder: coffeeOperations.addOrder,
}, dispatch);

export default withTranslation()(connect(null, mapDispachToProps)(OrderPage));
