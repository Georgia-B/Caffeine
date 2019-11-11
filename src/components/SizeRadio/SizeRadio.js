import React from 'react';
import PropTypes from 'prop-types';
import coffee from '../../res/coffee.png';
import './SizeRadio.css';

const SizeRadio = ({ size, isSelected, onSelect, imgHeight }) => {
    const className = isSelected ? 'size__input size__input--selected' : 'size__input';

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
