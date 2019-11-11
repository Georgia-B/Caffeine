import React from 'react';
import PropTypes from 'prop-types';
import './MilkRadio.css';

const MilkRadio = ({ value, name, isSelected, onSelect }) => {
    const className = isSelected ? 'milk__input milk__input--selected' : 'milk__input';

    return (
        <label className={className}>
            <span>{name}</span>
            <input type="radio" name="milk" value={value} onClick={onSelect} />
        </label>
    );
};

MilkRadio.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default MilkRadio;
