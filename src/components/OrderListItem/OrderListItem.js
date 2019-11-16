import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { coffeeOperations } from '../../redux';
import styles from './OrderListItem.module.css';

const OrderListItem = ({ order, updateStatus, clearOrder }) => {
    const actionButton = order.status === 'Brewing' ?
        <button className={styles.action} onClick={() => updateStatus({ id: order.id, status: 'Ready' })}>
            Order ready
        </button>
        :
        <button className={styles.action} onClick={() => clearOrder(order.id)}>
            Clear
        </button>;

    return (
        <li className={styles.container}>
            <span className={styles.title}>{order.size} {order.milk} {order.type}</span>
            <span>{order.status}</span>
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
};

const mapDispachToProps = (dispatch) => bindActionCreators({
    updateStatus: coffeeOperations.updateStatus,
    clearOrder: coffeeOperations.clearOrder,
}, dispatch);

export default connect(null, mapDispachToProps)(OrderListItem);
