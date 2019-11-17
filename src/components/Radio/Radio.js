import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styles from './Radio.module.css';

const Radio = ({ value, isSelected, onSelect, type, t, image = null }) => {
    const className = isSelected ? styles.selected : styles.inputwrapper;
    const content = image !== null ?
        <img src={image.src} alt={image.alt} height={image.height} />
        :
        <span>{t(value)}</span>;

    return (
        <label className={`${className} ${styles[type]}`}>
            {content}
            <input type="radio" name={type} value={value} onClick={onSelect} />
        </label>
    );
};

Radio.propTypes = {
    value: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    image: PropTypes.object,
    type: PropTypes.string,
    t: PropTypes.func,
};

export default withTranslation()(Radio);
