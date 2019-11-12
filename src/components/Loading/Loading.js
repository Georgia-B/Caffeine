import React from 'react';
import loading from '../../res/loading.png';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <img src={loading} alt="Loading" width="100" className="loading__image" />
        </div>
    );
};

export default Loading;
