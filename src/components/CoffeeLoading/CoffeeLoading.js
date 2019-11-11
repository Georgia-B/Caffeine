import React from 'react';
import loading from '../../res/loading.png';
import './CoffeeLoading.css';

const CoffeeLoading = () => {
    return (
        <div className="coffeeloading">
            <img src={loading} alt="Loading" width="100" className="coffeeloading__image" />
        </div>
    );
};

export default CoffeeLoading;
