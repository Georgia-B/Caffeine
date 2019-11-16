import React from 'react';
import PropTypes from 'prop-types';
import coffee from '../../res/coffee.png';
import styles from './SizeRadio.module.css';

const SizeRadio = ({ size, isSelected, onSelect, imgHeight }) => {
    const className = isSelected ? `${styles.inputwrapper} ${styles.selected}` : styles.inputwrapper;

    return (
        <label className={className}>
            <img src={coffee} alt={size} height={imgHeight} />
            <input type="radio" name="size" value={size} onClick={onSelect} />
        </label>
    );
};

SizeRadio.propTypes = {
    size: PropTypes.string,
    imgHeight: PropTypes.number,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default SizeRadio;
