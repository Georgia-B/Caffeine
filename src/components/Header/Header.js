import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton/LinkButton';
import './Header.css';

const Header = ({ title, action }) => {
    return (
        <div className="header">
            {action && <div className="header__spacer"></div>}
            <h1 className="header__title">{title}</h1>
            {action &&
                <div className="header__action">
                    <LinkButton to={action.to} label={action.label} />
                </div>
            }
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    action: PropTypes.object,
};

export default Header;
