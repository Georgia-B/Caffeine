import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = ({ title, action }) => {
    return (
        <div className={styles.header}>
            {action && <div className={styles.spacer}></div>}
            <h1 className={styles.title}>{title}</h1>
            {action &&
                <div className={styles.action}>
                    <Link to={action.to}>
                        <Button text={action.label} />
                    </Link>
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
