import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputGroup.module.css';

const InputGroup = ({ children }) => {
    return (
        <div className={styles.inputgroup}>
            {children}
        </div>
    );
};

InputGroup.propTypes = {
    children: PropTypes.node,
};

export default InputGroup;
