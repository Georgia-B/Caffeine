import React from 'react';
import PropTypes from 'prop-types';
import styles from './TypeRadio.module.css';

const TypeRadio = ({ value, name, isSelected, onSelect }) => {
    const className = isSelected ? `${styles.inputwrapper} ${styles.selected}` : styles.inputwrapper;

    return (
        <label className={className}>
            <span>{name}</span>
            <input type="radio" name="type" value={value} onClick={onSelect} />
        </label>
    );
};

TypeRadio.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default TypeRadio;
