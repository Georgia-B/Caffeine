import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkButton.css';

const LinkButton = ({ label, to }) => {
    return (
        <Link to={to}>
            <button className="linkbutton">
                {label}
            </button>
        </Link>
    );
};

LinkButton.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
};

export default LinkButton;
