import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import OrderListItem from '../OrderListItem/OrderListItem';
import styles from './OrderList.module.css';

const OrderList = ({ orders, t }) => {
    return (
        <ul className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>{t('orderlist.header.order')}</span>
                <span>{t('orderlist.header.status')}</span>
                <span></span>
            </div>
            {orders.length === 0 ?
                <div className={styles.empty}>{t('orderlist.empty')}</div>
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
    t: PropTypes.func,
};

export default withTranslation()(OrderList);
