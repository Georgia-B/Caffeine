import React from 'react';
import PropTypes from 'prop-types';
import OrderListItem from '../OrderListItem/OrderListItem';
import styles from './OrderList.module.css';

const OrderList = ({ orders }) => {
    return (
        <ul className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Order</span>
                <span>Status</span>
                <span></span>
            </div>
            {orders.length === 0 ?
                <div className={styles.empty}>No orders</div>
                :
                orders.map((order) => {
                    return <OrderListItem key={order.id} order={order} />;
                })
            }
        </ul>
    );
};

OrderList.propTypes = {
    orders: PropTypes.array,
};

export default OrderList;
