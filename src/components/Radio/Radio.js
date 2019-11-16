import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.css';

const Radio = ({ value, label, isSelected, onSelect, type, image = null }) => {
    const className = isSelected ? styles.selected : styles.inputwrapper;
    const content = image !== null ?
        <img src={image.src} alt={image.alt} height={image.height} />
        :
        <span>{label}</span>;

    return (
        <label className={`${className} ${styles[type]}`}>
            {content}
            <input type="radio" name={type} value={value} onClick={onSelect} />
        </label>
    );
};

Radio.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    image: PropTypes.object,
    type: PropTypes.string,
};

export default Radio;
