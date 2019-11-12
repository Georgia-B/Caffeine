import React from 'react';
import PropTypes from 'prop-types';
import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

const OrderList = ({ orders }) => {
    return (
        <ul className="orderlist">
            <div className="orderlist__header">
                <span className="orderlist__title">Order</span>
                <span>Status</span>
                <span></span>
            </div>
            {orders.length === 0 ?
                <div className="orderlist--empty">No orders</div>
                :
                <div className="orderlist__container">
                    {orders.map((order) => {
                        return <OrderListItem key={order.id} order={order} />;
                    })}
                </div>
            }
        </ul>
    );
};

OrderList.propTypes = {
    orders: PropTypes.array,
};

export default OrderList;
