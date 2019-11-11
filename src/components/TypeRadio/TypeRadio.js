import React from 'react';
import PropTypes from 'prop-types';
import './TypeRadio.css';

const TypeRadio = ({ value, name, isSelected, onSelect }) => {
    const className = isSelected ? 'type__input type__input--selected' : 'type__input';

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
