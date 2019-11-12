import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { coffeeOperations } from '../../redux';
import './OrderListItem.css';

const OrderListItem = ({ order, updateStatus, clearOrder }) => {
    return (
        <li className="orderlistitem">
            <span className="orderlistitem__title">{order.size} {order.milk} {order.type}</span>
            <span>{order.status}</span>
            {order.status === 'Brewing' ?
                <span className="orderlistitem__action">
                    <button
                        className="orderlistitem__action__button"
                        onClick={() => updateStatus({ id: order.id, status: 'Ready' })}>
                        Order ready
                    </button>
                </span>
                :
                <span className="orderlistitem__action">
                    <button
                        className="orderlistitem__action__button"
                        onClick={() => clearOrder(order.id)}>
                        Clear
                    </button>
                </span>
            }
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
