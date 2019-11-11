import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__spinner">
                <div className="loading__spinner__item"></div>
                <div className="loading__spinner__item"></div>
                <div className="loading__spinner__item"></div>
                <div className="loading__spinner__item"></div>
            </div>
        </div>
    );
};

export default Loading;
