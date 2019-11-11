import React from 'react';
import PropTypes from 'prop-types';
import './InputGroup.css';

const InputGroup = ({ children }) => {
    return (
        <div className="input__group">
            {children}
        </div>
    );
};

InputGroup.propTypes = {
    children: PropTypes.node,
};

export default InputGroup;
