import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { coffeeOperations } from '../../redux';
import { statusTypes } from '../../constants';
import styles from './OrderListItem.module.css';

const toSentenceCase = (string) => {
    const lowerCase = string.toLowerCase();

    return lowerCase.charAt(0).toUpperCase() + lowerCase.substring(1);
};

const OrderListItem = ({ order, updateStatus, clearOrder, t }) => {
    const orderString = `${t(order.size)} ${t(order.milk)} ${t(order.style)}`;

    const actionButton = order.status === statusTypes.brewing ?
        <button className={styles.action} onClick={() => updateStatus({ id: order.id, status: statusTypes.ready })}>
            {t('orderlist.item.actionready')}
        </button>
        :
        <button className={styles.action} onClick={() => clearOrder(order.id)}>
            {t('orderlist.item.actionclear')}
        </button>;

    return (
        <li className={styles.container}>
            <span className={styles.title}>{toSentenceCase(orderString)}</span>
            <span>{t(order.status)}</span>
            <span className={styles.actioncontainer}>
                {actionButton}
            </span>
        </li>
    );
};

OrderListItem.propTypes = {
    order: PropTypes.object,
    updateStatus: PropTypes.func,
    clearOrder: PropTypes.func,
    t: PropTypes.func,
};

const mapDispachToProps = (dispatch) => bindActionCreators({
    updateStatus: coffeeOperations.updateStatus,
    clearOrder: coffeeOperations.clearOrder,
}, dispatch);

export default withTranslation()(connect(null, mapDispachToProps)(OrderListItem));
